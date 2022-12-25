import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { connectWallet, getCurrentWalletConnected } from './interact'
//import { ConnectWallet } from '@thirdweb-dev/react'

//https://docs.alchemy.com/docs/integrating-your-smart-contract-with-the-frontend#step-5-connect-metamask-to-your-ui

/*const web3 = new web3(web3.givenProvider || "ws://localhost:8545");

async function connect() {
  if(window.ethereum) {
    await window.ethereum.request({method: "eth_requestAccounts"}); 
    window.web3 = new web3(window.ethereum); 
  } else {
    console.log("No Wallet");
  }
}*/
//export const [userAddress, setUserAddress] = useState("")

export const userAddress = (connectWallet().address);

export function ConnectButton() {

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


  return (
    <Container onClick={connectWalletPressed}>
      {walletAddress.length > 0 ? (
        <Connect>{String(walletAddress).substring(0,6) + "..." +
        String(walletAddress).substring(38)}</Connect>
      ) : (
        <Connect>Connect Wallet</Connect>
      )}
    </Container>
  )
}

export default ConnectButton

const Container = styled.div`
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

/*     <Container>
      <Connect>Connect Wallet</Connect>
    </Container>*/