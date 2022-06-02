import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { gameInfo } from "./gameInfo.js"
import congrats from "./img/congrats.png";
import versus from "./img/versus.png"

gameInfo.sort(() => Math.random() - 0.5);

function App() {
  const [fighters, setFighters] = useState(gameInfo);
  const [winners, setWinners] = useState([]);
  const [gameNum, setGameNum] = useState(fighters.length/2);
  const [gameEnd, setGameEnd] = useState(false);
  const [winnerClicked, setWinnerClicked] = useState(0);

  function win(num) {
      
      //왼쪽 클릭.
      if (num === 0) {
        setWinnerClicked(-1);
        // 오른쪽 클릭.
      } else {
        setWinnerClicked(1);
      }

      setTimeout(() => {
        // 라운드 종료. 
        if (fighters.length === 2 && winners.length >= 1) {
          setFighters([...winners, fighters[num]]);
          setWinners([]);
          setGameNum(prevState => prevState / 2);
          console.log(fighters)
        // 최종 우승자 나옴. 
        } else if (fighters.length === 2 && winners.length === 0) {
          setGameEnd(true);
          setFighters([fighters[num]]);
          console.log(fighters)
        // 경기중.
        } else {
          setWinners([...winners, fighters[num]]);
          setFighters(fighters.slice(2));
          console.log(fighters);
        }
        setWinnerClicked(0);
      }, 1500)
  }


  if (gameEnd) {
    return (
      <>
        <Title> 역시 배라는..</Title>
        <Round>{fighters[0].name}! ❤️</Round>
        <Winner src={fighters[0].img} />
        <Congrats src={congrats} />
      </>
    )
  }

  return (
    <>
      <Title>👑 배스킨라빈스31 이상형 월드컵 👑</Title>
      <Round>{winners.length + 1} / {gameNum}</Round>
      <Container>
        <Flavor onClick={() => win(0)}>
          <Left src={fighters[0].img} winnerClicked = {winnerClicked}/>
          {!winnerClicked && <Name>{fighters[0].name}</Name>}
        </Flavor>
        <Flavor onClick={() => win(1) }>
          <Right src={fighters[1].img} winnerClicked = {winnerClicked}/>
          {!winnerClicked && <Name>{fighters[1].name}</Name>}
        </Flavor>
        {!winnerClicked && <Versus src={versus} />}
      </Container>   
    </>
  );
}

const Title = styled.h1`
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 36px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 10px 0;
`;

const Round = styled.p`
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 25px;
  font-weight: 900;
  text-align: center;
`;

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const Flavor = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
    transform : scale(1.1, 1);
    z-index: 1;
  }
`;



const Name = styled.p`
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  background-color: whitesmoke;
  position: absolute;
  width: 200px;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
`

const Left = styled.img`
  width: 100%;
  height: 100%;
  background-color: pink;

  transition: ${props => (props.winnerClicked === -1 ? '1.5s all' : null)};
  transform-origin: ${props => (props.winnerClicked === -1 ? 'left' : null)};
  transform: ${props => (props.winnerClicked === -1 ? 'scaleX(2)' : null)};
`;

const Right = styled.img`
  width: 100%;
  height: 100%;
  background-color: skyblue;

  transition: ${props => props.winnerClicked === 1 ? '1.5s all' : null};
  transform-origin: ${props => props.winnerClicked === 1 ? 'right' : null};
  transform: ${props => props.winnerClicked === 1 ? 'scaleX(2)' : null};
`;

const Winner = styled.img`
  display: block; 
  margin: 0px auto;
  width: 500px;
  height: 500px;
`;

const Congrats = styled.img`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
`

const Versus = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

export default App;