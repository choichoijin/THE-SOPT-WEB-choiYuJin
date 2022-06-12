import React, { useEffect, useState } from "react";
import { Cards, WriterInfo, StyledRoot, ButtonContainer } from "./style";
import axios from "axios";

function LetterCards() {
  const [letterData, setLetterData] = useState([]);
  const [letterHint, setLetterHint] = useState();
  const [letterPassword, setLetterPassword] = useState();

  //서버에서 데이터 받아 letterData에 저장.
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

  //편지 카드 보여주기.
  const letterList = letterData.map((letter) => (
    <li key={letter._id} onClick={() => showModal(letter)}>
      <WriterInfo>
        <span>From. {letter.name}</span>
        <img alt="프로필 이미지" src={letter.images[0]} />
      </WriterInfo>
      <p>{letter.content}</p>
    </li>
  ));

  //선택된 편지 정보 저장해서 모달에 보여주기.
  function showModal(letter) {
    setLetterHint(letter.hint);
    setLetterPassword(letter.password);
  }

  return (
    <Cards>
      <ul>{letterList}</ul>
      {/* props로 선택된 애 힌트랑 비번 가져와야하는데, 서버에서 다 데이터 가져온 후 여야함.  */}
      <StyledRoot>
        <h1>비밀번호를 입력하세요.</h1>
        <h2>
          힌트: {letterHint} 비번: {letterPassword}
        </h2>
        <input type="password" placeholder="비밀번호"></input>
        <ButtonContainer>
          <button>OK</button>
          <button>Cancel</button>
        </ButtonContainer>
      </StyledRoot>
    </Cards>
  );
}

export default LetterCards;
