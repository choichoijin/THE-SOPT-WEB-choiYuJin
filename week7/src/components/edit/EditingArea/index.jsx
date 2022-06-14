import React from "react";
import { StyledRoot, WritingForm, SubmitButton } from "./style";

function Edit() {
  return (
    <StyledRoot>
      <h1>😼 몰래 수정해보아요 😼</h1>
      <WritingForm>
        <div>
          <label htmlFor="name">이름</label>
          <input id="name" type="text" placeholder="이름이 뭐에요?"></input>
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            id="content"
            type="text"
            placeholder="무슨 내용의 편지를 써볼까요?"
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="text"
            placeholder="비밀번호를 통해 편지를 잠궈보아요."
          ></input>
        </div>
        <div>
          <label htmlFor="hint">힌트</label>
          <input
            id="hint"
            type="text"
            placeholder="비밀번호 힌트를 써주세요."
          ></input>
        </div>
        <SubmitButton type="submit">몰래 수정하기</SubmitButton>
      </WritingForm>
    </StyledRoot>
  );
}

export default Edit;
