import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ConnectButton from './ConnectButton';
import { connectWallet, deployCreatorToken, getCurrentWalletConnected  } from './interact';
import { userAddress } from './ConnectButton';

//https://www.web3.university/tracks/create-a-smart-contract/integrate-your-smart-contract-with-a-frontend

function Beta() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const [inputName, setInputName] = useState(""); 
  const [inputSupply, setInputSupply] = useState(""); 
  const [inputPercent, setInputPercent] = useState("");

  // :::::::::::::::::::::::::::: CONNECT BUTTON :::::::::::::::::::::::::::: //
  const [walletAddress, setWallet] = useState("");
  
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address); 
      setStatus(status);
    }
    fetchData();

    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }




  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //
  

  //const walletAddress = "0x25034aAa0a5E140C78657050dc8a42EEBd41Ccb9";
  const BISwalletAddress = userAddress; 
  const transacOnPressed = async () => {
    await deployCreatorToken(walletAddress, inputName, inputValue, inputSupply, inputPercent);
  }

  return (
    <Container>
      <ButtonContainer onClick={connectWalletPressed}r>
      {walletAddress.length > 0 ? (
        <Connect>{String(walletAddress).substring(0,6) + "..." +
        String(walletAddress).substring(38)}</Connect>
      ) : (
        <Connect>Connect Wallet</Connect>
      )}
      </ButtonContainer>
      <BigTitle>Try it</BigTitle>
      <Title>Deploy your own creator's token</Title>
      <SubTitle>Soon, anyone will be able to trade it</SubTitle>
      <Wrap>
      <Wrapper>
        <Input type="text" placeholder="Your token's name" value ={inputName} onChange={(e) => setInputName(e.target.value)}/>
      </Wrapper>
      <Wrapper>
        <Input2 type="text" placeholder="Symbol" value= {inputValue} onChange = {handleChange}/>
      </Wrapper>
      <Wrapper>
        <Input type="text" placeholder="Supply" value = {inputSupply} onChange={(b) => setInputSupply(b.target.value)}/>
      </Wrapper>
      <Wrapper>
        <Input2 type="text" placeholder="You keep" value={inputPercent} onChange={(c) => setInputPercent(c.target.value)}/>
        <Percent>%</Percent>
      </Wrapper>
      </Wrap>
      <BigCircle>
        <Circle>
          {inputValue}
        </Circle>
      </BigCircle>
      <Validate onClick={transacOnPressed}>
        <SubText>Validate</SubText>
      </Validate>
    </Container>
  )
}

export default Beta

const Container = styled.div`
  height: 350px; 
  width: 100%; 
  background: #F17B7B;
  border-radius: 10px;
  position : relative;
  display: flex; 
  flex-direction : column;
  text-align: center;
`;

const Validate = styled.div`
  position: absolute;
  bottom: 10px; 
  right: 10px; 
  height: 40px;
  width: 150px; 
  background: #212121;
  border-radius: 10px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background: #FFFFFF; 
    color: #212121;
  }
`; 

const SubText = styled.text`
  background: transparent; 
  font-weight: 400; 
  font-size: 20px; 
  font-family: poppins; 
`;

const BigTitle = styled.text`
  background: transparent;
  font-weight: 400; 
  font-size: 3vw; 
  font-family: poppins; 
  color : #FFFFFF;
  position: absolute; 
  top: 0; 
  left: 10px;
  @media(max-width: 905px) {
    font-size: 60px;
    top: -10px;
  }
`; 

const Title = styled.text`
  background: transparent;
  font-weight: 400; 
  font-size: 1.2vw; 
  font-family: poppins; 
  color : #FFFFFF;
  position: absolute; 
  top: 55px; 
  left: 10px;
  @media(max-width: 905px) {
    font-size: 15px;
    top: 70px;
  }
`;

const SubTitle = styled.text`
  background: transparent;
  font-weight: 400; 
  font-size: 1vw; 
  font-family: poppins; 
  color : #212121;
  position: absolute; 
  bottom: 60px; 
  right: 10px;
  @media(max-width: 905px) {
    font-size: 2vw;
  }
`; 

const Wrap = styled.div`
  height: 75%;
  width: 70%;
  position : absolute; 
  bottom: 0; 
  display: flex; 
  flex-direction : column;
  justify-content: space-between;
  padding: 20px;
  background: transparent;
`; 

const Wrapper = styled.div`
  width: 80%; 
  height: 20%; 
  background: transparent;
  position: relative;
`;



const Text = styled.text`
  background: transparent; 
  font-family: poppins;
  font-weight: 300; 
  font-size: 15px; 
  color: #FFFFFF;
`; 

const BigCircle = styled.div`
  width: 140px; 
  height: 140px; 
  border-radius: 280px; 
  position: absolute; 
  right: 30px; 
  top: 120px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  background: #FFFFFF;
  @media(max-width: 905px) {
    height: 180px; 
    width: 180px; 
    border-radius: 400px;
    top: 80px;
    right: 15px;
  }
`; 

const Circle = styled.div`
  width: 100px; 
  height: 100px; 
  border-radius: 2000px; 
  background: #212121;
  display:flex; 
  justify-content: center;
  align-items: center;
  color: #FFFFFF; 
  font-size: 25px;
  font-family: roboto mono; 
  font-weight: 300;
  overflow: hidden;
  @media(max-width: 905px) {
    height: 140px; 
    width: 140px; 
  }
`; 

const Input = styled.input `
  font-family: poppins; 
  font-size: 15px; 
  font-weight: 400;
  color: #FFFFFF;
  position: absolute; 
  left:0;
  bottom: 0;
  width: 20vw;
  height: 50px;
  padding-left: 10px;
  padding-right:10px;
  background: #212121;
  border: none;
  border-radius: 100px;
  @media(max-width: 905px) {
    width: 50vw;
  }
`;

const Input2 = styled.input`
  font-family: poppins; 
  font-size: 15px; 
  font-weight: 400;
  color: #FFFFFF;
  position: absolute; 
  left:0;
  bottom: 0;
  width: 20vw;
  height: 50px;
  padding-left: 10px;
  padding-right:10px;
  background: #212121;
  border: none;
  border-radius: 100px;
  @media(max-width: 905px) {
    width: 50vw;
  }
`;

const Percent = styled.text`
  font-size: 20px; 
  font-family: poppins; 
  font-weight: 300; 
  background: transparent; 
  color: #FFFFFF;
  position: absolute;
  left: 84px;
  margin-top: 4px;
`;

const ButtonContainer = styled.div`
  height: 50px; 
  width: 180px; 
  background: #212121;
  position: absolute; 
  top: 0; 
  right: 0; 
  border-top-right-radius: 10px; 
  border-bottom-left-radius: 10px;
  border: solid 2px #F17B7B;
  display: flex; 
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #F17B7B;
    border: solid 2px #212121;
  }
`; 

const Connect = styled.text`
  font-family: poppins; 
  font-weight: 300; 
  font-size: 20px; 
  background: transparent;
  color: #FFFFFF;
`; 