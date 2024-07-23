require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x676f0d24a25354fda50183aaf81b8ccdcdab8430d6e725d2647c99735dd6986f",
      ],
    },
  },
};
