import React from 'react'
import styled from 'styled-components'

function Audience() {
  return (
    <Container>
      <Mona src="./assets/monalisa.png"/>
      <Wrapper1>
        <Title>Your audience</Title>
      </Wrapper1>
      <Wrapper2>
        <Title>Shouldn't be the only way</Title>
      </Wrapper2>
      <Wrapper3>
        <Title>To monetize your work</Title>
      </Wrapper3>
    </Container>
  )
}

export default Audience

const Container = styled.div`
  height: 100%; 
  //width:370px; 
  width: 50%;
  position: absolute; 
  right: 0; 
  background: transparent;
  border-radius: 10px;
  border: solid 2px #F8CB2D;
  overflow: hidden;
`; 

const Mona = styled.img`
  position: absolute; 
  bottom:-5px; 
  left:0;
  right:0; 
  margin-left: auto; 
  margin-right: auto;
  background: transparent;
  height: 250px; 
  width: auto;
`;

const Wrapper1 = styled.div`
  height: 40px; 
  width: 100%;
  background: #F8CB2D;
  transform: rotate(-20deg);
  position: absolute;
  //top: 10px;
  left: -30px;
  display: flex; 
  //justify-content: center; 
  align-items: center;
`;

const Wrapper2 = styled.div`
  height: 40px; 
  width: 110%;
  background: #F8CB2D;
  transform: rotate(5deg);
  position: absolute; 
  top: 110px;
  left: -2px;
  display: flex; 
  //justify-content: center; 
  align-items: center;
`; 

const Wrapper3 = styled.div`
  height: 40px; 
  width: 120%;
  background: #F8CB2D;
  transform: rotate(-5deg);
  position: absolute; 
  bottom: 20px;
  left: -5px;
  display: flex; 
  //justify-content: center; 
  align-items: center;
`;

const Title = styled.text`
  font-family: poppins; 
  background: transparent; 
  font-weight: 600; 
  //font-size: 25px; 
  font-size: 1.7vw;
  color: #212121;
  margin-left: 30px;
  @media(max-width: 905px) {
    font-size: 3vw;
  }
`; 