import { useState } from 'react';
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
import versus from "./img/versus.png"

const gameInfo = [
  {
    img: pic1,
    name: '(코 끝에선 화➰❤️ 입안에선 후➰💚) 민트 초콜릿 칩',
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

function App() {
  const [fighters, setFighters] = useState(gameInfo.sort(() => Math.random() - 0.5));
  const [winners, setWinners] = useState([]);
  const [gameNum, setGameNum] = useState(fighters.length/2);
  const [gameEnd, setGameEnd] = useState(false);

  function win(num, e) {
      e.target.classList.add('clicked');
      setTimeout(() => {
        // 라운드 종료. 
        if (fighters.length === 2 && winners.length >= 1) {
          setFighters([...winners, fighters[num]]);
          setWinners([]);
          setGameNum(prevState => prevState / 2);
        // 최종 우승자 나옴. 
        } else if (fighters.length === 2 && winners.length === 0) {
          setGameEnd(true);
          setFighters([fighters[num]]);
        // 경기중.
        } else {
          setFighters(fighters.slice(2));
          setWinners([...winners, fighters[num]]);
        }
        e.target.classList.remove('clicked');
      }, 1000)
  }


  if (gameEnd) return (
    <>
      <Title> 역시 배라는..</Title>
      <Round>{fighters[0].name}! ❤️</Round>
      <Winner src={fighters[0].img} />
      <Congrats src={congrats} />
    </>
  )

  return (
    <>
      <Title>👑 배스킨라빈스31 이상형 월드컵 👑</Title>
      <Round>{winners.length + 1} / {gameNum}</Round>
      <Container>
        <Flavor onClick={(e) => win(0, e)}>
          <Left src={fighters[0].img}  />
          <Name>{fighters[0].name}</Name>
        </Flavor>
        <Flavor onClick={(e) => win(1, e)}>
          <Right src={fighters[1].img} />
          <Name>{fighters[1].name}</Name>
        </Flavor>
        <Versus src={versus} />
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

  &.clicked {
    transition: 1s all;
    transform: scaleX(2);
    transform: translate(-50%);
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
`;

const Right = styled.img`
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

const Winner = styled.img`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  margin-top: 40px;
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