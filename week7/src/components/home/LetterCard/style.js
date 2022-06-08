import styled from "styled-components";

export const Cards = styled.ul`
  font-family: "Unilab";
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
  font-size: 2.5rem;

  li {
    height: 18rem;
    width: 24rem;
    border: black solid;
    background-color: rgb(252, 251, 234);
    padding: 1.5rem;
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 0.3rem;
    border-radius: 50%;
  }
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
