import styled from 'styled-components';
import GlobalStyle from './globalStyle.js';

function App() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>우리 동네 떡볶이집</Title>
        <hr></hr>
        <BaseInfo>
          <LocationBased>▶︎ 지역 기반으로 검색할게요 <input type = "checkbox"></input></LocationBased>
          우리 동네는 여기에요
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type = "text" placeholder = "지역이름을 입력하세요"></input>
            <button type = "submit">검색하기!</button>
          </form>
        </BaseInfo>
        <hr></hr>
        <List>

        </List>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 400px;
  height: 100%;
  background-color: orange;
  margin: 10px auto;
  border-radius: 30px;
`;

const Title = styled.h1`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 900;
`;

const BaseInfo = styled.div`
  text-align: center;
  font-size: 25px;
  & > form {
    margin: 10px auto;
  }
  & > form > input {
    font-family: 'EarlyFontDiary';
    margin: 0 5px;
  }
  & > form > button {
    font-family: 'EarlyFontDiary';
  }
`;

const LocationBased = styled.p`
  display: block;
  margin: 30px 0;
  font-size: 20px;
`;

const List = styled.ul`
  height: 150px; //임시.
`;

export default App;
