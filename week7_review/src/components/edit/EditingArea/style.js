import styled from "styled-components";

export const StyledRoot = styled.main`
  header {
    margin: 30px;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const WritingForm = styled.form`
  width: 500px;
  height: 100%;
  border-radius: 15px;
  background-color: beige;
  position: relative;
  margin: 20px auto;

  div {
    padding: 15px 10px;
    display: flex;
    align-items: center;
  }

  div > label {
    font-size: 30px;
  }

  div > input {
    width: 350px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    position: absolute;
    right: 30px;
    padding-left: 10px;
    font-size: 20px;
  }
`;

export const SubmitButton = styled.button`
  width: 90%;
  height: 35px;
  background-color: rgb(255, 226, 80);
  border-style: none;
  border-radius: 8px;
  margin: 20px 5%;
  font-size: 18px;

  :hover {
    background-color: rgb(255, 208, 0);
  }
`;
