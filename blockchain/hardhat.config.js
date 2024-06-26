require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${process.env.POLYSCAN_APIKEY}`,
  },
};
