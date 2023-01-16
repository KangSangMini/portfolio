import React, { useState, useEffect } from "react";
import "./main.css";

function Main() {
  const [Title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = [
    "개",
    "발",
    "자",
    " ",
    "강",
    "상",
    "민",
    "입",
    "니",
    "다.",
    "😃",
  ];

  useEffect(() => {
    // setTimeout(() => {}, 3000);
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        const result = prevTitleValue + completionWord[count];

        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setTitle("");
        }
        return result;
      });
    }, 200);
    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="wrap">
      <div className="wrap-main">
        <h1>안녕하세요.👐</h1>
        <h1>{Title}</h1>
      </div>
    </div>
  );
}

export default Main;
