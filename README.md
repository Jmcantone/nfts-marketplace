# NFTs Marketplace
## Crypto Punks - Ethereum Project
This project contains the smart contracts and all the necessary configuration for the creation of non-fungible tokens.
[Hardhat](https://hardhat.org/) is used as a development environment and OpenZeppelin security standards, such as [ERC721](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721) and  [ERC721Enumerable](ttps://docs.openzeppelin.com/contracts/2.x/api/token/erc721#ERC721Enumerable), are used.

### Setup Environment
Please run the following commands

```shell
npm install
yarn install
npx hardhat compile
node scripts/deploy.js
```
Other useful commands

```shell
npx hardhat accounts
npx hardhat clean
npx hardhat test
npx hardhat help
```

_NOTE: It is necessary to modify the file ```.env.example``` so that it is ```.env``` and contains the private key of the account that is going to deploy the contract and the identifier of the project previously created in [Infura](https://faucets.chain.link/rinkeby)._

###  Publishing
This is an example of how to deploy at the Rinkeby TESNET

``npx hardhat run .\scripts\deploy.js --network rinkeby``

You can use [Chainlink's faucet](https://faucets.chain.link/rinkeby) to get Ether to be used in Rinkeby's TESNET

Use the following command to generate and export a single smart contract at the moment of verifying and validating the ByteCode of a contract.

``npx hardhat flatten > Flattened.sol``

_NOTE: Please remove all license lines and then leave only one of them to avoid errors._