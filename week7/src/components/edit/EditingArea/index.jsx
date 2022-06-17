import React, { useState } from "react";
import { StyledRoot, WritingForm, SubmitButton } from "./style";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

function Edit() {
  const letter = useLocation().state;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    await axios
      .patch(
        `https://sopt-letter.herokuapp.com/letter/${letter._id}`,
        newLetter
      )
      .catch((error) => console.log(error));
  };

  const [newLetter, setNewLetter] = useState({
    name: `${letter.name}`,
    content: `${letter.content}`,
    password: `${letter.password}`,
    hint: `${letter.hint}`,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewLetter({
      ...newLetter,
      [name]: value,
    });
  };

  return (
    <StyledRoot>
      <h1>😼 몰래 수정해보아요 😼</h1>
      <WritingForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            name="name"
            type="text"
            placeholder="이름이 뭐에요?"
            defaultValue={letter.name}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            name="content"
            type="text"
            placeholder="무슨 내용의 편지를 써볼까요?"
            defaultValue={letter.content}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            name="password"
            type="text"
            placeholder="비밀번호를 통해 편지를 잠궈보아요."
            defaultValue={letter.password}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="hint">힌트</label>
          <input
            name="hint"
            type="text"
            placeholder="비밀번호 힌트를 써주세요."
            defaultValue={letter.hint}
            onChange={onChange}
          ></input>
        </div>
        <SubmitButton type="submit">몰래 수정하기</SubmitButton>
      </WritingForm>
    </StyledRoot>
  );
}

export default Edit;
