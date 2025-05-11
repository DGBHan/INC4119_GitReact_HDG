import React from "react";

const Display = ({ input, result }) => {
  const displayStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    marginBottom: "10px",
    borderRadius: "10px",
    fontSize: "24px",       // 폰트 크게
    textAlign: "right",
    minHeight: "60px",      // 박스 자체 크기 확보
    boxShadow: "inset 0 0 5px #aaa",
  };

  const resultStyle = {
    fontSize: "20px",
    color: "#666",
    marginTop: "10px",
  };

  return (
    <div style={displayStyle}>
      <div>{input || "0"}</div>
      <div style={resultStyle}>{result}</div>
    </div>
  );
};

export default Display;
