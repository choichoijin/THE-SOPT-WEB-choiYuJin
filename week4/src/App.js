import { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from './globalStyle.js';

function App() {
  const [storeList, setStoreList] = useState([]);
  const searchRef = useRef();
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 내 위치 정보 가져오기.
  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
          },
          (e) => {
            alert("HTTPS 연결을 확인해주세요.");
            errHandler && errHandler();
          }
        );
      });
    }

    return (
      //테스트용 여수 지도.
      { x: 127.661064, y: 34.766175}
      )
  };

  async function getMyLocation(){
    try {
      setIsLoading(true);
      const result = await getLocation();
      getStoreBasedLocation(result.x, result.y);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

  }

  async function getStoreBasedLocation(longitude, latitude) {
      setIsLoading(true);
      const result = await axios.get(
        "https://dapi.kakao.com/v2/local/search/keyword",
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
          },
          params: {
            x: longitude,
            y: latitude,
            radius: 1000,
            query: '떡볶이',
          }
        }
      )
      setStoreList(result.data.documents);
  };

  async function getStoreBasedSearch(location) {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " 떡볶이",
        }
      }
    )
    setStoreList(result.data.documents);
  }

  const handleCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }

  // 제출 버튼 핸들링. 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (checked) {
      getMyLocation();
    } else {
        if (searchRef.current) {
          const regionInput = searchRef.current;
          getStoreBasedSearch(regionInput.value);
      }
    }
  }

  const showStoreList = () => {

    if (isLoading) {
      return (
        <Loading>로딩중 ...</Loading>
      ) 
    } 
    
    if (storeList.length === 0) {
      return (
        <p>결과가 없습니다.</p>
      )
    }

    return storeList.map(({ id, place_name, phone, address_name, distance }) => (
      <Store key={id}>
        <h3>{place_name}</h3>
        <p>{phone}</p>
        {checked ? <p>{distance}미터 거리</p> : <p>{address_name}</p>}
      </Store>
    ));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>우리 동네 떡볶이집</Title>
        <hr></hr>
        <BaseInfo>
          <LocationBased>▶︎ 지역 기반으로 검색할게요 <input type = "checkbox" onChange={() => handleCheck()}></input></LocationBased>
          우리 동네는 여기에요
          <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={searchRef} type = "text" placeholder = "지역이름을 입력하세요" disabled = {checked}/>
            <button type = "submit">검색하기!</button>
          </form>
        </BaseInfo>
        <hr></hr>
        <StoreList>{showStoreList()}</StoreList>
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

const StoreList = styled.ul`
  height: 100%;

  display: flex;
  list-style: none;
  flex-direction: column;
`;

const Store = styled.li`
  height: 80px;
  width: 350px;
  background-color: skyblue;
  margin: 10px auto;
  border-radius: 15px;
`

const Loading = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 50px;
  text-align: center;
`

export default App;
