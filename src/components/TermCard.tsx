import React from "react";
import { Card, Tag, Typography, Button, Tooltip, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { GenZTerm } from "../types";

const { Title, Text } = Typography;

interface Props {
  data: GenZTerm;
}

// Function to generate consistent pastel colors based on tag length
const getTagColor = (tag: string) => {
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  const index = tag.length % colors.length;
  return colors[index];
};

const TermCard: React.FC<Props> = ({ data }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.term}: ${data.definition}`);
    message.success("Đã copy vào clipboard nè! ✨");
  };

  return (
    <Card
      style={{
        width: "100%",
        marginBottom: 24,
        borderRadius: 24, // Super rounded
        border: "none",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)", // Soft diffuse shadow
        background: "#FFFFFF",
        overflow: "hidden",
        position: "relative",
      }}
      bodyStyle={{ padding: "24px 28px" }}
    >
      {/* Decorative colored bar at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background:
            "linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
        }}
      />

      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <div>
          <Title
            level={3}
            style={{
              color: "#2d3748",
              margin: 0,
              fontWeight: 800,
              fontSize: "1.75rem",
            }}
          >
            {data.term}
          </Title>
          <div style={{ marginTop: 8 }}>
            {data.tags.map((tag) => (
              <Tag
                key={tag}
                color={getTagColor(tag)}
                bordered={false}
                style={{
                  borderRadius: 12,
                  padding: "4px 10px",
                  marginRight: 6,
                  marginBottom: 6,
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                #{tag}
              </Tag>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <Tooltip title="Copy định nghĩa">
            <Button
              shape="circle"
              icon={<CopyOutlined style={{ color: "#718096" }} />}
              onClick={handleCopy}
              style={{ border: "none", background: "#EDF2F7" }}
            />
          </Tooltip>
        </div>
      </div>

      {/* Definition */}
      <div style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: "17px",
            lineHeight: "1.6",
            color: "#4A5568",
            fontWeight: 400,
          }}
        >
          {data.definition}
        </Text>
      </div>

      {/* Example Box - Chat Bubble Style */}
      <div
        style={{
          background: "#F7FAFC",
          padding: "16px 20px",
          borderRadius: "16px",
          borderLeft: "4px solid #8B5CF6", // Accent border
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <Text
          type="secondary"
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: 700,
            color: "#A0AEC0",
          }}
        >
          Ví dụ minh họa:
        </Text>
        <Text
          style={{
            fontSize: "16px",
            color: "#553C9A",
            fontStyle: "italic",
            fontFamily: "Lexend Deca",
          }}
        >
          "{data.example}"
        </Text>
      </div>
    </Card>
  );
};

export default TermCard;
