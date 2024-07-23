// scripts/sendEtherToContract.js
require("dotenv").config();
const { Web3 } = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const accountA = "0xBA21c0DCf20F843E2b06c60Cc8b46aB80411ceBe"; // Replace with your Account A address
const privateKeyA =
  "0xe9c4e6ff6bfd330fa57bc14006e80f9b829913b6ab2fb501b3bc2062d9fb6521"; // Replace with your private key
const contractAddress = "0x6e12C24C7970017875A5E948b1b86BD6ef88eb1d"; // Replace with your contract address
const accountB = "0xF505853ca65277cA98FFe41A70356ADF7439dfA7"; // Replace with your Account B address

async function sendEtherToContract() {
  // Log accountB for reference
  console.log("Sending Ether to contract from Account A:", accountA);
  console.log("Account B (for reference):", accountB);

  const tx = {
    from: accountA,
    to: accountB,
    value: web3.utils.toWei("1", "ether"),
    gas: 21000, // Updated gas limit
    gasPrice: web3.utils.toWei("10", "gwei"),
  };

  try {
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKeyA);
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("Transaction successful with hash:", receipt.transactionHash);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

sendEtherToContract();
