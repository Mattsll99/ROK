import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'; 
import Entry from './components/Entry';
import Creator from './components/Creator';
import Investors from './components/Investors';
import Beta from './components/Beta';
import Audience from './components/Audience';




function App() {
  return (
    <Container>
     <Left>
      <Entry />
      <BottomLeft>
        <Link href="https://twitter.com/ROK_Market">
          <Wrapper >
          <Text>Stay in Touch</Text>
          <Image src = "./assets/white twitter.png"/>
          </Wrapper>
          </Link>
        <Audience />
      </BottomLeft>
     </Left>
     <Right>
      <Top>
        <Creator />
        <Investors />
      </Top>
      <Bottom>
        <Beta />
      </Bottom>
     </Right>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex; 
  flex-direction: row;
  @media(max-width: 905px) {
    flex-direction: column;
  }
`; 

const Text = styled.text`
  background: transparent; 
  font-family: poppins; 
  font-size: 30px; 
  font-weight: 500; 
  position: absolute;
  top: 40px;
`; 

const Left = styled.div`
  width: 55%; 
  display:flex; 
  flex-direction: column;
  @media(max-width: 905px) {
    width: 100%;
  }
`; 

const Right = styled.div`
  width:45%;
  display:flex; 
  flex-direction: column;
  @media(max-width: 905px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Top = styled.div`
  height: auto;
  padding-left: 10px;
  display: flex; 
  flex-direction: row;
  position: relative;
  @media(max-width: 1035px) {
    flex-direction: column;
    height: 450px;
  }
`; 

const Bottom = styled(Top)`
  padding-top: 10px;
  width: 100%; 
  height: auto;
`; 

const BottomLeft = styled.div`
  width: 100%; 
  height: 250px;
  margin-top: 10px;
  display: flex; 
  flex-direction: row;
  position: relative;
`; 

const Image = styled.img`
  height: 50px; 
  width: auto;
  background: transparent;
`; 

const Wrapper = styled.div`
  height: 100%; 
  width: 48%;
  display: flex; 
  position: relative;
  justify-content: center; 
  align-items: center;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background: #F8CB2D;
    color: #212121;
  }
`; 

const Link = styled.a`
  background: transparent;
  height: auto; 
  width: auto;
  width: 100%;
`; 