// src/pages/Game.tsx
import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Typography,
  Spin,
  message,
  Progress,
  Space,
  Layout,
  Result,
  Radio,
  Tag,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  CopyOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GenZTerm } from "../types";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

// --- CẤU HÌNH ---
const LEVELS = [
  { value: 5, label: "Tập sự", color: "green" },
  { value: 10, label: "Thành thạo", color: "blue" },
  { value: 20, label: "Trùm cuối", color: "red" },
];

const TIME_PER_QUESTION = 15; // 15 giây mỗi câu

interface Question {
  target: GenZTerm;
  options: GenZTerm[];
  correctTerm: string;
}

// Helper: Shuffle Array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const getKhaKhiaMessage = (score: number, total: number) => {
  const ratio = score / total;
  if (ratio === 1) return "Ghê chưa ghê chưa! Gen Z chúa tể ngôn từ! 👑";
  if (ratio >= 0.8) return "Cũng ra gì đấy! Sắp thành 'Idol Tóp Tóp'! 😎";
  if (ratio >= 0.5) return "Kiến thức này đã được tiếp thu, nhưng chưa đủ! 🤔";
  return "Tối cổ quá rồi fen ơi! Về trang chủ học bài đi! 🗿";
};

const Game: React.FC = () => {
  const navigate = useNavigate();

  // --- STATE ---
  const [data, setData] = useState<GenZTerm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Game Settings
  const [selectedLevel, setSelectedLevel] = useState<number>(10);

  // Game Play State
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Timer State
  const [timeLeft, setTimeLeft] = useState<number>(TIME_PER_QUESTION);

  // High Scores
  const [highScores, setHighScores] = useState<Record<number, number>>({
    5: 0,
    10: 0,
    20: 0,
  });

  // --- EFFECT: Load Data & High Scores ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://genz-db.netlify.app/api/dictionary"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        message.error("Lỗi mạng rồi fen ơi!");
        setLoading(false);
      }
    };

    const savedScores = localStorage.getItem("genz_highscores_db");
    if (savedScores) {
      try {
        setHighScores(JSON.parse(savedScores));
      } catch (e) {
        console.error("Lỗi parse high score cũ", e);
      }
    }
    fetchData();
  }, []);

  // --- EFFECT: Timer Logic ---
  useEffect(() => {
    // Chỉ chạy khi game đang chơi, chưa kết thúc, và chưa chọn đáp án
    if (!gameStarted || gameEnded || selectedAnswer) return;

    if (timeLeft === 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameStarted, gameEnded, selectedAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- EFFECT: Save High Score ---
  useEffect(() => {
    if (gameEnded) {
      const currentHighScore = highScores[selectedLevel] || 0;
      if (score > currentHighScore) {
        const newHighScores = { ...highScores, [selectedLevel]: score };
        setHighScores(newHighScores);
        localStorage.setItem(
          "genz_highscores_db",
          JSON.stringify(newHighScores)
        );
        message.success({
          content: `Kỷ lục mới mức ${selectedLevel} câu! Đỉnh của chóp!`,
          icon: <TrophyOutlined style={{ color: "#faad14" }} />,
        });
      }
    }
  }, [gameEnded, score, selectedLevel, highScores]);

  // --- LOGIC ---

  const generateQuestion = () => {
    if (!data || data.length < 4) {
      message.warning("Dữ liệu chưa tải xong hoặc không đủ câu hỏi!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const targetItem = data[randomIndex];

    if (!targetItem || !targetItem.term) return;

    const potentialDistractors = data.filter(
      (item) =>
        item.term && item.term.toLowerCase() !== targetItem.term.toLowerCase()
    );

    const shuffledDistractors = shuffleArray(potentialDistractors);
    const distractors = shuffledDistractors.slice(0, 3);

    if (distractors.length < 3) return;

    const allOptions = shuffleArray([targetItem, ...distractors]);

    setCurrentQuestion({
      target: targetItem,
      options: allOptions,
      correctTerm: targetItem.term,
    });

    // Reset trạng thái cho câu hỏi mới
    setSelectedAnswer(null);
    setTimeLeft(TIME_PER_QUESTION); // Reset đồng hồ
  };

  const handleNextQuestion = () => {
    if (questionCount >= selectedLevel) {
      setGameEnded(true);
    } else {
      setQuestionCount((prev) => prev + 1);
      generateQuestion();
    }
  };

  const handleTimeout = () => {
    message.error("Hết giờ rồi fen ơi! Xu cà na 😭");
    setSelectedAnswer("TIMEOUT"); // Block buttons
    // Không cộng điểm
    setTimeout(handleNextQuestion, 1500);
  };

  const handleAnswer = (term: string) => {
    if (selectedAnswer || !currentQuestion) return;
    setSelectedAnswer(term);

    if (term === currentQuestion.correctTerm) {
      setScore((prev) => prev + 1);
      message.success({
        content: "Chuẩn cơm mẹ nấu! +1",
        icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
        duration: 1,
      });
    } else {
      message.error({
        content: "Sai bét rồi!",
        icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
        duration: 1,
      });
    }

    setTimeout(handleNextQuestion, 1000); // Chuyển câu nhanh hơn (1s)
  };

  const startGame = () => {
    if (data.length < selectedLevel && data.length > 0) {
      message.warning(
        `Chỉ có ${data.length} từ trong từ điển. Sẽ chơi tối đa số từ này.`
      );
    }
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setQuestionCount(1);
    generateQuestion();
  };

  // Helper chọn màu cho đồng hồ
  const getTimerColor = () => {
    if (timeLeft > 10) return "#52c41a"; // Xanh
    if (timeLeft > 5) return "#faad14"; // Vàng
    return "#ff4d4f"; // Đỏ
  };

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );

  // --- RENDER ---
  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      <div style={{ padding: 16 }}>
        <Button icon={<HomeOutlined />} onClick={() => navigate("/")}>
          Quay lại Từ điển
        </Button>
      </div>

      <Content style={styles.container}>
        {/* MÀN HÌNH KẾT QUẢ */}
        {gameEnded ? (
          <Card style={styles.card}>
            <Result
              status={score > selectedLevel / 2 ? "success" : "warning"}
              icon={
                <TrophyOutlined
                  style={{
                    color:
                      score > (highScores[selectedLevel] || 0)
                        ? "#fadb14"
                        : "#1890ff",
                  }}
                />
              }
              title={
                score >= (highScores[selectedLevel] || 0) && score > 0
                  ? "KỶ LỤC MỚI! 🏆"
                  : "Hết nước chấm!"
              }
              subTitle={
                <div>
                  <Tag color="purple" style={{ marginBottom: 8 }}>
                    Level: {selectedLevel} câu
                  </Tag>{" "}
                  <br />
                  Kết quả:{" "}
                  <b>
                    {score}/{selectedLevel}
                  </b>
                  <br />
                  High Score: <b>{highScores[selectedLevel] || 0}</b>
                </div>
              }
              extra={[
                <Button
                  type="primary"
                  key="replay"
                  onClick={startGame}
                  shape="round"
                  icon={<PlayCircleOutlined />}
                >
                  Chơi lại
                </Button>,
                <Button
                  key="change"
                  onClick={() => {
                    setGameEnded(false);
                    setGameStarted(false);
                  }}
                >
                  Đổi Level
                </Button>,
              ]}
            >
              <div
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: 15,
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                <Text strong style={{ color: "#722ed1" }}>
                  "{getKhaKhiaMessage(score, selectedLevel)}"
                </Text>
              </div>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Button
                  block
                  icon={<CopyOutlined />}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `Tui đạt ${score}/${selectedLevel} điểm Gen Z Game!`
                    );
                    message.success("Đã copy!");
                  }}
                >
                  Copy kết quả
                </Button>
              </Space>
            </Result>
          </Card>
        ) : !gameStarted ? (
          /* MÀN HÌNH START */
          <Card style={styles.card} hoverable>
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <Title level={1} style={{ color: "#722ed1" }}>
                GEN Z GAME
              </Title>

              <Paragraph type="secondary">
                Chọn độ khó để thử thách bản thân:
              </Paragraph>

              <div style={{ marginBottom: 24 }}>
                <Radio.Group
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  buttonStyle="solid"
                >
                  {LEVELS.map((lvl) => (
                    <Radio.Button key={lvl.value} value={lvl.value}>
                      {lvl.label} ({lvl.value})
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </div>

              <div
                style={{
                  marginBottom: 20,
                  padding: 10,
                  background: "#fffbe6",
                  borderRadius: 8,
                  border: "1px solid #ffe58f",
                }}
              >
                <ThunderboltOutlined style={{ color: "#faad14" }} />
                <Text strong style={{ marginLeft: 8 }}>
                  Kỷ lục ({selectedLevel} câu): {highScores[selectedLevel] || 0}
                </Text>
              </div>

              <Button
                type="primary"
                size="large"
                onClick={startGame}
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  height: 50,
                  padding: "0 40px",
                  fontSize: 18,
                }}
              >
                Gét Gô!
              </Button>
            </div>
          </Card>
        ) : (
          /* MÀN HÌNH GAMEPLAY */
          <Card style={{ ...styles.card, maxWidth: 600, position: "relative" }}>
            {/* TIMER PROGRESS CIRCLE (Góc phải) */}
            <div style={{ position: "absolute", top: 20, right: 20 }}>
              <Progress
                type="circle"
                percent={(timeLeft / TIME_PER_QUESTION) * 100}
                format={() => `${timeLeft}s`}
                width={50}
                strokeColor={getTimerColor()}
              />
            </div>

            <div
              style={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Space>
                <Tag color="purple">Level: {selectedLevel}</Tag>
                <Tag color="gold">Điểm: {score}</Tag>
              </Space>

              <Text strong style={{ marginTop: 10 }}>
                Câu {questionCount}/{selectedLevel}
              </Text>
            </div>

            <Progress
              percent={(questionCount / selectedLevel) * 100}
              showInfo={false}
              status="active"
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            />

            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <Text type="secondary">Thuật ngữ này nghĩa là gì?</Text>
              <Title
                level={2}
                style={{ color: "#1890ff", textTransform: "uppercase" }}
              >
                "{currentQuestion?.target.term}"
              </Title>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {currentQuestion?.options.map((item, index) => {
                const isSelected = selectedAnswer === item.term;
                const isCorrect = item.term === currentQuestion?.correctTerm;

                // Logic màu sắc nút
                let btnStyle: React.CSSProperties = {
                  height: "auto",
                  padding: "15px",
                  whiteSpace: "normal",
                  textAlign: "left",
                  fontSize: 16,
                };

                if (selectedAnswer) {
                  if (isCorrect)
                    btnStyle = {
                      ...btnStyle,
                      background: "#f6ffed",
                      borderColor: "#b7eb8f",
                      color: "#389e0d",
                    };
                  else if (isSelected)
                    btnStyle = {
                      ...btnStyle,
                      background: "#fff1f0",
                      borderColor: "#ffa39e",
                      color: "#cf1322",
                    };
                  else btnStyle = { ...btnStyle, opacity: 0.5 };
                }

                return (
                  <Button
                    key={index}
                    block
                    size="large"
                    onClick={() => handleAnswer(item.term)}
                    disabled={!!selectedAnswer}
                    style={btnStyle}
                  >
                    {item.definition}
                  </Button>
                );
              })}
            </div>
          </Card>
        )}
      </Content>
    </Layout>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 500,
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
};

export default Game;
