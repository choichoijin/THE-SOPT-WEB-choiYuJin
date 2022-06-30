import styled from "styled-components";

export const StyledRoot = styled.main`
  header {
    font-size: 2.5rem;
    text-align: center;
    margin: 30px;
  }
`;

export const WritingForm = styled.form`
  width: 500px;
  height: 100%;
  border-radius: 15px;
  margin: 20px auto;
  position: relative;
  background-color: beige;

  div {
    display: flex;
    align-items: center;
    padding: 15px 10px;
  }

  div > label {
    font-size: 30px;
  }

  div > input {
    font-size: 20px;
    padding-left: 10px;
    width: 350px;
    height: 30px;
    position: absolute;
    right: 30px;
    border-radius: 10px;
    border-style: none;
  }
`;

export const SubmitButton = styled.button`
  height: 35px;
  width: 90%;
  font-size: 30px;
  border-style: none;
  border-radius: 8px;
  font-size: 18px;
  margin: 20px 5%;
  background-color: rgb(255, 226, 80);

  :hover {
    background-color: rgb(255, 208, 0);
  }
`;
