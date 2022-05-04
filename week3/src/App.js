//import React, { useState, useEffect, useRef } from "react";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import pic1 from "./img/touslesjours.jpeg";
import pic2 from "./img/sibelhomme.jpeg";
import pic3 from "./img/moncher.jpeg";
import pic4 from "./img/enfant.jpeg";

const gameInfo = [
  {
    img: pic1,
    name: '뚜레주르',
  },
  {
    img: pic2,
    name: '시벨롬',
  },
  {
    img: pic3,
    name: '몽쉘',
  },
  {
    img: pic4,
    name: '앙팡',
  },
]

function App() {
  const [fighters, setFighters] = useState(gameInfo);
  const [winners, setWinners] = useState([]);

  const 처음이이김 = () => {
    setFighters(fighters.slice(2));
    setWinners([...winners, fighters[0]]);
  }
  const 둘째가이김 = () => {
    setFighters(fighters.slice(2));
    setWinners([...winners, fighters[1]]);
  }
  useEffect(() => {

  });

  return (
    <Container>
      <First src={fighters[0].img} onClick={처음이이김} />
      <Second src={fighters[1].img} onClick={둘째가이김}/>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display:flex;

  color: white;
  `;

const First = styled.img`
  width: 300px;
  background-color: blue;
  height: 300px;
  
  
  
  `;
const Second = styled.img`
background-color: red;
  width: 300px;
  height: 300px;

`;

export default App;

//준결승이 끝났을 때 fighters가 winners가 되야함
// 준결승 끝나는거 판단. 
// 결승이 끝났을 때 