import styled from "styled-components";

export const Cards = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
    gap: 2rem;
    font-family: "Unilab";
    font-size: 2.5rem;
  }

  li {
    width: 24rem;
    height: 18rem;
    background-color: rgb(252, 251, 234);
    border: gray solid;
    border-radius: 10px;
    position: relative;
    padding: 1.5rem;

    cursor: pointer;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 0.3rem;
  }
`;

export const WriterInfo = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const PasswordModal = styled.div`
  width: 400px;
  background-color: rgb(40, 91, 127);
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  font-family: "SUIT-Medium";
  color: white;

  h1 {
    margin: 15px 15px;
    font-size: 25px;
    text-align: center;
  }

  input {
    width: 80%;
    border-style: none;
    border-radius: 10px;
    height: 40px;
    margin: 10px 10%;
    padding-left: 10px;
    font-family: "SUIT-Medium";
  }

  button {
    height: 36px;
    border-style: none;
    border-radius: 25px;
    margin: 10px 10px;
    padding: 10px 20px;

    :hover {
      background-color: rgb(186, 184, 184);
    }
  }
`;

export const Hint = styled.p`
  margin: 10px 10px;
  font-size: 16px;
  text-align: center;
`;

//비밀번호가 틀렸을 때
export const Notice = styled.p`
  height: 40px;
  background-color: rgb(242, 118, 118);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditButton = styled.button`
  height: 35px;
  background-color: rgb(255, 235, 150);
  border-style: none;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 18px;

  :hover {
    background-color: rgb(255, 208, 0);
  }
`;
