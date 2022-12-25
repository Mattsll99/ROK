//require('dotenv').config();
//const dotenv = require('dotenv-webpack');
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

//https://www.web3.university/tracks/create-a-smart-contract/integrate-your-smart-contract-with-a-frontend

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "supply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kept",
        "type": "uint256"
      }
    ],
    "name": "deployCreatorToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCreatorBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; 
const contractAddress = '0x1616e87f6101E4A5fF3fA9905f947AD7c8cF16Ca'

export const Factory = new web3.eth.Contract(contractABI, contractAddress);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const deployCreatorTokenBis = async(address, name, symbol, supply, kept) => {
  if(!window.ethereum || address === null) {
    return {
      status: 
      "Connect your Metamask wallet to deploy you token",
    };
  }
 
  const transactionParameters = {
    name: "",
    symbol: "", 
    supply: "", 
    kept: ""
  }
  
}

export const deployCreatorToken = async(address, name, symbol, supply, kept) => {
  if(!window.ethereum || address === null) {
    return {
      status: 
      "Connect your Metamask wallet to deploy you token",
    };
  }

  const tokenName = name.toString(); 
  const tokenSymbol = symbol.toString()
  const supplyInShares = web3.utils.toWei(supply.toString(), "ether"); 
  const keptInPercent = web3.utils.toWei(kept.toString(), "ether");
  //Getting the transaction parameters
  const transactionParameters = {
    to: contractAddress, 
    from: address, 
    data : Factory.methods.deployCreatorToken(tokenName, tokenSymbol, supplyInShares, keptInPercent).encodeABI(),
  }

  //Signing the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction", 
      params: [transactionParameters],
    }); 
    return {
      status: (
        "Done"
      ),
    };
  } catch(error) {
    return {
      status : "Not done " + error.message,
    };
  }
}

//Set up the transaction parameters
