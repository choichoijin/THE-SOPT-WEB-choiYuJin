import React from "react";
import { StyledRoot } from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledRoot>
      <h1>웹파트 익명 우체통 📮</h1>
      <Link to="/write">
        <button>편지 쓰러 가기 ☞</button>
      </Link>
    </StyledRoot>
  );
}

export default Header;
