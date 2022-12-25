import React from 'react'
import styled from 'styled-components'; 

function Investors() {
  return (
    <Container>
      <Title>For Investors</Title>
      <Cadre>
        <Image src ="./assets/the greek thinker.png"/>
      </Cadre>
      <SubText>Invest in promising creators and make profit.</SubText>
    </Container>
  )
}

export default Investors

const Container = styled.div`
  height: 450px; 
  width: 50%;
  background: #626262;
  border-radius: 10px;
  position: absolute; 
  right:0; 
  display: flex; 
  justify-content: center;
  padding-left: 10px; 
  padding-right: 10px;
  text-align: center;
  @media(max-width: 1035px) {
    position: relative;
    margin-top: 10px;
    height: 225px; 
    width: 100%;
  }
`; 

const Image = styled.img`
  background: transparent; 
  height: 220px; 
  width: auto;
  position: absolute; 
  right: 0; 
  bottom: 0;
`; 

const Cadre = styled.div`
  height: 200px; 
  width: 200px;
  position: absolute; 
  top: 100px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-radius: 500px;
  //border: solid 1px #FFFFFF;
`; 

const Title = styled.text`
  background: transparent; 
  color: #FFFFFF; 
  font-family: roboto mono; 
  font-weight: 400;
  font-size: 30px;
  //position: absolute; 
  margin-top: 20px;  
`; 

const SubText = styled.text`
  background: transparent; 
  position : absolute; 
  bottom: 20px;
  font-family: roboto mono; 
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 100;
`;