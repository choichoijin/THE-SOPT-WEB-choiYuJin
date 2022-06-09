import React from "react";
import { StyledRoot, ButtonContainer } from "./style";

function PasswordModal() {
  return (
    <StyledRoot>
      <h1>비밀번호를 입력하세요.</h1>
      <h2>힌트</h2>
      <input type="password" placeholder="비밀번호"></input>
      <ButtonContainer>
        <button>OK</button>
        <button>Cancel</button>
      </ButtonContainer>
    </StyledRoot>
  );
}

export default PasswordModal;
