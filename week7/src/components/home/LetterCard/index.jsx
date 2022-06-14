import React, { useEffect, useState } from "react";
import {
  Cards,
  WriterInfo,
  PasswordModal,
  ButtonContainer,
  LetterText,
} from "./style";
import axios from "axios";

function LetterCards() {
  const [letterData, setLetterData] = useState([]);

  const [typedPassword, setTypedPassword] = useState();

  //modalOpen이 true면 모달을 열어라.
  const [modalOpen, setModalOpen] = useState(false);

  //비밀번호 맞춰진 편지 list.
  const [unlockList, setUnlockList] = useState([]);

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
      {unlockList.indexOf(letter._id) === -1 ? null : (
        <LetterText>
          <WriterInfo>
            <span>From. {letter.name}</span>
            <img alt="프로필 이미지" src={letter.images[0]} />
          </WriterInfo>
          <p>{letter.content}</p>
        </LetterText>
      )}
    </li>
  ));

  //hint, id, password를 한번에 가져올 수 있을까?
  const [letterHint, setLetterHint] = useState();
  const [letterPassword, setLetterPassword] = useState();
  const [letterId, setLetterId] = useState();

  //선택된 편지 정보 저장해서 모달에 보여주기 & 아이디 저장.
  function showModal(letter) {
    setLetterHint(letter.hint);
    setLetterPassword(letter.password);
    setLetterId(letter._id);
    setModalOpen(true);
  }

  const onChange = (e) => {
    setTypedPassword(e.target.value);
  };

  function checkPassword() {
    //비밀번호 맞음 -> 내용 보여줌.
    if (letterPassword === typedPassword) {
      setModalOpen(false);
      setUnlockList((unlockList) => [...unlockList, letterId]);
    } else {
      //틀림 -> 틀렸음.
      alert("비밀번호를 정확하게 입력해주세요!");
    }
  }

  return (
    <>
      <Cards>
        <ul>{letterList}</ul>
      </Cards>
      {modalOpen ? (
        <PasswordModal>
          <h1>비밀번호를 입력하세요.</h1>
          <h2>
            힌트: {letterHint} 비번: {letterPassword}
          </h2>
          <input placeholder="비밀번호" onChange={onChange}></input>
          <ButtonContainer>
            <button onClick={checkPassword}>OK</button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </ButtonContainer>
        </PasswordModal>
      ) : null}
    </>
  );
}

export default LetterCards;
