/** eslint react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMassage";

const App = () => {
  console.log("saisiho");
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(false);

  const onClickSwitchShow = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaseShowFlag(true);
      } else {
        faseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShow}>on/of</button>
      <p>{num}</p>
      {faseShowFlag && <p>(..)</p>}
    </>
  );
};

export default App;
