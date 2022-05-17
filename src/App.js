import React from "react";

const App = () => {
  const onClikButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClikButton}>ボタン</button>
    </>
  );
};

export default App;
