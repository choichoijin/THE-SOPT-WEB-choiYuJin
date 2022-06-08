import React, { useEffect, useState } from "react";
import { Cards, WriterInfo } from "./style";
import axios from "axios";

function LetterCards() {
  const [letterData, setLetterData] = useState([]);
  useEffect(() => {
    const getLetterData = async () => {
      try {
        const response = await axios.get(
          "https://sopt-letter.herokuapp.com/letter"
        );
        setLetterData(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    getLetterData();
  }, []);

  const letterList = letterData.map((letter) => (
    <li key={letter._id}>
      <WriterInfo>
        <span>From. {letter.name}</span>
        <img alt="프로필 이미지" src={letter.images[0]} />
      </WriterInfo>
      <p>{letter.content}</p>
    </li>
  ));

  return <Cards>{letterList}</Cards>;
}

export default LetterCards;
