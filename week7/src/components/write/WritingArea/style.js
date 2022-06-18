import styled from "styled-components";

export const StyledRoot = styled.div`
  h1 {
    font-size: 2.5rem;
    font-family: "GangwonEdu_OTFBoldA";
    text-align: center;
    margin: 30px;
  }
`;

export const WritingForm = styled.form`
  width: 500px;
  height: 100%;
  border-radius: 15px;
  margin: 20px auto;
  font-family: "GangwonEdu_OTFBoldA";
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
    font-family: "GangwonEdu_OTFBoldA";
    width: 350px;
    height: 30px;
    position: absolute;
    right: 30px;
    border-radius: 10px;
    border-style: none;
  }
`;

export const UploadButton = styled.button`
  height: 26px;
  font-family: "GangwonEdu_OTFBoldA";
  font-size: 18px;
  border-style: none;
  border-radius: 15px;
  margin-left: 40px;
  background-color: rgb(255, 235, 150);

  :hover {
    background-color: rgb(255, 208, 0);
  }
`;

export const SubmitButton = styled.button`
  height: 35px;
  width: 90%;
  font-family: "GangwonEdu_OTFBoldA";
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
