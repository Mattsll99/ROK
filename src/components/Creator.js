import React from 'react'
import styled from 'styled-components'

function Creator() {
  return (
    <Container>
      <Title>For Creators</Title>
      <Cadre>
        <Image src="./assets/DavidStatue.png"/>
      </Cadre>
      <SubText>Deploy your own token on ROK. Let anyone invest in it.</SubText>
    </Container>
  )
}

export default Creator

const Container = styled.div`
  height: 450px; 
  width: 48%;
  background: #374034;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  padding-left: 10px; 
  padding-right: 10px;
  text-align: center;
  @media(max-width: 1035px) {
    height: 225px; 
    width: 100%;
  }
`;

const Image = styled.img`
  background: transparent;
  height: 240px; 
  width: auto;
  position: absolute; 
  bottom: -1px; 
  right: 0;
  @media(max-width: 1035px) {
    //right: 10px;
  }
`; 

const Cadre = styled.div`
  height: 60%; 
  width: 200px;
  position: absolute; 
  top: 70px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  display: flex; 
  align-items: center;
  justify-content: center;
  border: solid 1px #AF8F50;
  @media(max-width: 1035px) {
    margin-right: 0;
  }
`; 

const Title = styled.text`
  background: transparent; 
  color: #FFFFFF; 
  font-family: Abril Fatface; 
  font-weight: 600;
  font-size: 35px;
  //position: absolute; 
  margin-top: 20px;  
  @media(max-width: 1035px) {
    //color: #212121;
    z-index: 2;
  }
`; 

const SubText = styled.text`
  background: transparent; 
  position : absolute; 
  bottom: 20px;
  font-family: Abril Fatface; 
  color: #FFFFFF;
  font-size: 25px;
  font-weight: 100;
`;