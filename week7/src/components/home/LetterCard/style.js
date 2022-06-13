import styled from "styled-components";

export const Cards = styled.section`
  ul {
    font-family: "Unilab";
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
    gap: 2rem;
    font-size: 2.5rem;
  }

  li {
    height: 18rem;
    width: 24rem;
    border: black solid;
    background-color: rgb(252, 251, 234);
    padding: 1.5rem;
    position: relative;

    //초기 letterText 안보이게
    /* div {
      display: ${(props) => (props.isLocked ? null : "none")};
    } */
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 0.3rem;
    border-radius: 50%;
  }
`;

// export const CardCover = styled.article`
//   height: 18rem;
//   width: 24rem;
//   //background-color: blue;
//   position: absolute;
//   left: 0;
//   top: 0;
// `;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PasswordModal = styled.div`
  width: 25rem;
  height: 17rem;
  background-color: skyblue;
  position: absolute;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div``;

export const LetterText = styled.div``;
