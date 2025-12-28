// src/App.tsx
import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Game from "./pages/Game";
import "./App.css";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Lexend Deca', sans-serif",
          colorPrimary: "#8B5CF6",
          borderRadius: 16,
          colorText: "#2d3748",
          colorBgLayout: "#FFFBF5",
        },
        components: {
          Input: {
            controlHeightLG: 50,
            fontSizeLG: 16,
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Route mặc định: Trang Từ điển */}
          <Route path="/" element={<Dictionary />} />

          {/* Route mới: Trang Game */}
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
