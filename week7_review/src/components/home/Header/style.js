import styled from "styled-components";

export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #112534;
  color: white;
  width: 100%;
  height: 7.5rem;
  position: relative;
  font-family: "GangwonEdu_OTFBoldA";

  h1 {
    font-size: 3rem;
  }

  button {
    background-color: rgb(255, 249, 76);
    font-family: "GangwonEdu_OTFBoldA";
    height: 2.5rem;
    width: 8rem;
    font-size: 1rem;
    border: none;
    border-radius: 10rem;
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;
  }
`;
