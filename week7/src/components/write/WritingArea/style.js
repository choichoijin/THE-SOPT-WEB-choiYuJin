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
  width: 30rem;
  height: 50rem;
  background-color: beige;
  margin: 20px auto;

  input[type="file"] {
    display: none;
  }
`;

export const UploadButton = styled.button`
  background-color: skyblue;
`;

export const SubmitButton = styled.button`
  background-color: skyblue;
`;
