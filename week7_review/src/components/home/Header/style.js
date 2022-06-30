import styled from "styled-components";

export const StyledRoot = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: #112534;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 3rem;
  }

  button {
    width: 8rem;
    height: 2.5rem;
    background-color: rgb(255, 249, 76);
    border: none;
    border-radius: 10rem;
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;
    font-size: 1rem;
  }
`;
