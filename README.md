# NFTs Marketplace

## Crypto Punks - Ethereum Project

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

It is necessary to modify the file ".env.example" so that it is ".env" and contains the private key of the account that is going to display the contract and the identifier of the project previously created in [Infura](https://faucets.chain.link/rinkeby)

###  Publishing
This is an example to deploy to the Rinkeby testnet

``npx hardhat run .\scripts\deploy.js --network rinkeby``

[Here](https://faucets.chain.link/rinkeby) you can get ether for testing

Use the following command to generate and export a single smart contract for the moment of verifying and validating the ByteCode of a contract in some network

``npx hardhat flatten > Flattened.sol``

Please remove all license lines and then leave only one of them to avoid errors.