import React, { useState } from "react";
import {
  Layout,
  Input,
  List,
  Typography,
  ConfigProvider,
  FloatButton,
} from "antd";
import { UpOutlined, SearchOutlined } from "@ant-design/icons";
import TermCard from "./components/TermCard";
import { TERMS } from "./data/sourceData";
import { GenZTerm } from "./types";
import "./App.css"; // Ensure CSS is imported

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredData = TERMS.filter(
    (item: GenZTerm) =>
      item.term.toLowerCase().includes(searchText.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Lexend Deca', sans-serif",
          colorPrimary: "#8B5CF6", // Gen Z Purple
          borderRadius: 16,
          colorText: "#2d3748",
          colorBgLayout: "#FFFBF5", // Warm cream background
        },
        components: {
          Input: {
            controlHeightLG: 50,
            fontSizeLG: 16,
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", background: "transparent" }}>
        {/* Floating/Glassy Header */}
        <Header
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "16px 24px 8px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 0,
            zIndex: 100,
            borderBottom: "1px solid rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Title
              level={2}
              style={{
                margin: 0,
                fontWeight: 900,
                background: "linear-gradient(to right, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Từ điển Gen Z 🤟
            </Title>
            <Text
              style={{ display: "flex", lineHeight: "2rem" }}
              type="secondary"
            >
              Cập nhật ngôn ngữ hệ tư tưởng mới
            </Text>
          </div>

          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Input.Search
              placeholder="Hôm nay bạn muốn tra từ gì? (vd: Flex, Trap...)"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              className="custom-search-input"
              onChange={handleSearch}
            />
          </div>
        </Header>

        <Content
          style={{
            padding: "32px 24px",
            maxWidth: "768px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Result Stats */}
          <div style={{ marginBottom: 24, textAlign: "left" }}>
            <Text style={{ fontSize: "16px", color: "#718096" }}>
              Tìm thấy{" "}
              <strong style={{ color: "#8B5CF6" }}>
                {filteredData.length}
              </strong>{" "}
              thuật ngữ uy tín ✨
            </Text>
          </div>

          <List
            grid={{ gutter: 24, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
            dataSource={filteredData}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: filteredData.length,
              onChange: (page, size) => {
                setCurrentPage(page);
                setPageSize(size);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              showSizeChanger: true,
              locale: { items_per_page: "/ trang" },
              showTotal: (total, range) => (
                <Text type="secondary">
                  Hiển thị {range[0]}-{range[1]} của <strong>{total}</strong> từ
                </Text>
              ),
              pageSizeOptions: ["5", "10", "20", "50"],
              position: "bottom",
              align: "center",
              style: { marginTop: 32 },
            }}
            renderItem={(item) => (
              <List.Item style={{ marginBottom: 0 }}>
                <TermCard data={item} highlight={searchText} />
              </List.Item>
            )}
            locale={{
              emptyText: (
                <div style={{ padding: 40, textAlign: "center", opacity: 0.6 }}>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>🌚</div>
                  <Text>
                    Hông tìm thấy từ này, quê á! <br /> Thử từ khác đi bà.
                  </Text>
                </div>
              ),
            }}
          />
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "transparent",
            color: "#A0AEC0",
            paddingBottom: 40,
          }}
        >
          <Text type="secondary">
            Made with 💜 by Gen Z Dictionary Team ©2025
          </Text>
        </Footer>

        <FloatButton.BackTop
          icon={<UpOutlined />}
          type="primary"
          style={{ right: 24, bottom: 24 }}
        />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
