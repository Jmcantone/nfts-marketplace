require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const projectId = process.env.INFURA_PROJECT_ID
const privateKey = process.env.DEPLOYER_SIGNET_PRIVATE_KEY

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [`0x${privateKey}`]
    }
  }
};
