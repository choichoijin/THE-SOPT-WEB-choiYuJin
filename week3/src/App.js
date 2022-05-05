import { useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import pic1 from "./img/민트초콜릿칩.png";
import pic2 from "./img/오레오쿠키앤크림.png";
import pic3 from "./img/사랑에빠진딸기.png";
import pic4 from "./img/뉴욕치즈케이크.png";
import pic5 from "./img/아몬드봉봉.png";
import pic6 from "./img/블랙소르베.png";
import pic7 from "./img/요거트.png";
import pic8 from "./img/엄마는외계인.png";
import congrats from "./img/congrats.png";

const gameInfo = [
  {
    img: pic1,
    name: '민트 초콜릿 칩',
  },
  {
    img: pic2,
    name: '오레오 쿠키 앤 크림',
  },
  {
    img: pic3,
    name: '사랑에 빠진 딸기',
  },
  {
    img: pic4,
    name: '뉴욕 치즈케이크',
  },
  {
    img: pic5,
    name: '아몬드 봉봉',
  },
  {
    img: pic6,
    name: '블랙 소르베',
  },
  {
    img: pic7,
    name: '요거트',
  },
  {
    img: pic8,
    name: '엄마는 외계인',
  },
]

let gameEnd = false;
let roundNum = 1;

function App() {
  const [fighters, setFighters] = useState(gameInfo);
  const [winners, setWinners] = useState([]);
  const [gameNum, setGameNum] = useState(fighters.length/2);

  const leftWin = () => {
    // 라운드 종료. 
    if (fighters.length === 2 && winners.length >= 1) {
      setFighters([...winners, fighters[0]]);
      setWinners([]);
      ++roundNum;
      // 최종 우승자 나옴. 
    } else if (fighters.length === 2 && winners.length === 0) {
      gameEnd = true;
      setFighters([fighters[0]]);
      ++roundNum;
      // 경기중.
      } else {
    setFighters(fighters.slice(2));
    setWinners([...winners, fighters[0]]);
    }
  }

  const rightWin = () => {
    if (fighters.length === 2 && winners.length >= 1) {
          setFighters([...winners, fighters[1]]);
          setWinners([]);
          ++roundNum;
        } else if (fighters.length === 2 && winners.length === 0) {
          gameEnd = true;
          setFighters([fighters[1]]);
          ++roundNum;
        } else {
          setFighters(fighters.slice(2));
          setWinners([...winners, fighters[1]]);
        }
  }

  useEffect(() => {
      setGameNum( fighters.length / 2)
    }, [roundNum])

  if (gameEnd) return (
    <>
      <Title> 이상형 월드컵 결과는..</Title>
      <Round>역시 배라는 {fighters[0].name}! ❤️</Round>
      <Winner src={fighters[0].img} />
      <Congrats src={congrats} />
    </>
  )

  return (
    <>
      <Title> 배스킨라빈스31 메뉴 이상형 월드컵 </Title>
      <Round>{winners.length + 1} / {gameNum}</Round>
      <Container>
        {<Left src={fighters[0].img} onClick={leftWin} />}
        {<Right src={fighters[1].img} onClick={rightWin}/>}
      </Container>
    </>
  );
}

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const Round = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const Container = styled.main`
  width: 100%;
  height: 100%;
  display:flex;
`;

const Left = styled.img`
  width: 50%;
  height: 100%;
  background-color: blue;
  

  &:hover {
    cursor: pointer;
    width: 60%
  }
`;

const Right = styled.img`
  background-color: red;
  width: 50%;
  height: 100%;

  &:hover {
    cursor: pointer;
    width: 60%;
  }
`;

const Winner = styled.img`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
`;

const Congrats = styled.img`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
`

export default App;