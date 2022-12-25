import React from 'react'
import styled from 'styled-components';

function Row({profil, name, symbol, price}) {
  return (
    <Container>
      <Wrapper>
        <Profil src={profil}/>
        <Name>{name}</Name>
      </Wrapper>
      <Wrapper>
        <Token></Token>
        <Name2>{symbol}</Name2>
      </Wrapper>
      <Wrapper>
      <Name2 style={{marginLeft: "-50px"}}>{price}</Name2>
      </Wrapper>
      <Wrapper>
      </Wrapper>
      <Button>
        <Text>Invest</Text>
      </Button>
    </Container>
  )
}

export default Row

const Container = styled.div`
  background: transparent; 
  border-top: solid 2px #212121;
  width: 100%; 
  height: 25%;
  position: relative;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  padding-left: 30px; 
  padding-right: 30px;
`;

const Button = styled.div`
  height: 35px; 
  width: 100px;
  background: blue;
  position: absolute; 
  right: 0; 
  border-radius:10px; 
  background: #212121;
  display: flex; 
  justify-content: center; 
  align-items: center;
`; 

const Text = styled.text`
  background: transparent; 
  font-family: poppins; 
  font-size : 18px; 
  font-weight: 200; 
  color: #FFFFFF;
`; 

const Wrapper = styled.div`
  height: 100%; 
  width: 20%; 
  background: transparent;
  display:flex; 
  justify-content: center; 
  align-items: center;
  position: relative;
`; 

const Profil = styled.img`
  height: 30px; 
  width: 30px; 
  border-radius: 100px;
  //background: transparent;
  position: absolute; 
  left: 0;
`; 

const Name = styled.text`
  font-family: poppins; 
  font-size: 14px; 
  font-weight:500; 
  //margin-left: 15px;
  margin-left: 3vw;
  background: transparent;
  @media(max-width: 667px) {
    display: none;
  }
`; 

const Name2 = styled.text`
  font-family: poppins; 
  font-size: 14px; 
  font-weight:500; 
  //margin-left: 15px;
  margin-left: 3vw;
  background: transparent;
`;

const Token = styled.div`
  height: 30px; 
  width:30px; 
  border-radius: 60px; 
  background: #F17B7B;
  position: absolute; 
  left: 0;
`; 