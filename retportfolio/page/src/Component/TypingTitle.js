// import React from "react";
import { useState, useEffect } from "react";

const TypingTitle = () => {
  const [setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "개발자 강상민입니다.😃";

  useEffect(() => {
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        setTitle((prevTitleValue) => {
          const result = prevTitleValue + completionWord[count];

          setCount(count + 1);

          if (count >= completionWord.length) {
            setCount(0);
            setTitle("");
          } else {
            clearInterval(typingInterval);
          }
          return result;
        });
      }, 200);
    }, 3000);
    // return () => {
    //   clearInterval(typingInterval);
    // };
  });
};

export default TypingTitle;
