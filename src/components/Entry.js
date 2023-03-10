import React from 'react'
import styled from 'styled-components';
import Row from './Row';

function Entry() {
  return (
    <Container>
      <Cover></Cover>
      <Title>ROK</Title>
      <Body>
        <Menu>
          <Text>Creator</Text>
          <Text>Token</Text>
          <Text>Price</Text>
          <Text></Text>
        </Menu>
        <Row 
          profil= "./assets/streamer1.jpg"
          name= "creator #1"
          symbol = "$CTK1"
          price = "0.006 ETH"
        />
        <Row 
          profil= "./assets/man3.jpg"
          name= "creator #2"
          symbol = "$CTK2"
          price = "0.002 ETH"
        />
        <Row 
          profil= "./assets/woman1.jpg"
          name= "creator #3"
          symbol = "$CTK3"
          price = "0.002 ETH"
        />
        <Row 
          profil= "./assets/woman3.jpg"
          name= "creator #4"
          symbol = "$CTK4"
          price = "0.112 ETH"
        />
      </Body>
      <Bottom>
        <Subtitle>Buy, sell & trade the tokens of your fav content creators</Subtitle>
      </Bottom>
    </Container>
  )
}

export default Entry


const Cover = styled.div`
  height: 100%; 
  width: 100%; 
  position: absolute; 
  z-index: 2; 
  background: blue;
  border-radius: 10px;
  background: rgba( 255, 255, 255, 0.15 );
  //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`; 

const Container = styled.div`
  width: 100%; 
  height: 550px; 
  background: #FFFFFF; 
  border-radius: 10px;
  position: relative;
  color: #212121;
  @media(max-width: 504px) {
    width: 484px;
  }
`; 

const Title = styled.text`
  position: absolute; 
  top: 20px; 
  left: 30px; 
  background: transparent; 
  font-size: 40px; 
  font-family: poppins; 
  z-index: 3;
`; 

const Bottom = styled.div`
  height: 130px; 
  background: transparent; 
  position: absolute; 
  bottom: 0; 
  left:0; 
  right:0; 
  margin-left: auto; 
  margin-right: auto;
  width: 95%;
  display: flex; 
  align-items: center; 
  justify-content: center;
  border-top: solid 3px #212121;
`; 

const Subtitle = styled.text`
  font-family: poppins; 
  font-size: 35px; 
  background: transparent;
  font-weight: 600;
  z-index: 3;
  @media(max-width: 1056px) {
    font-size: 30px;
  }
`;

const Body = styled.div`
  width: 90%; 
  height: 55%; 
  background: transparent;
  position absolute; 
  top:0; 
  bottom:0; 
  margin-top: auto; 
  margin-bottom: auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  display: flex; 
  flex-direction : column;
`; 

const Menu = styled.div`
  width: 80%; 
  //height: 50px;
  background: transparent;
  display: flex; 
  flex-direction:  row; 
  justify-content: space-between;
  padding-left: 30px; 
  padding-right: 30px;
`; 

const Text = styled.text`
  background: transparent;
  font-family: poppins; 
  font-size: 20px;
  font-weight: 500;
`;