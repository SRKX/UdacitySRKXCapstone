# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Framework version

Truffle v5.4.14 (core: 5.4.14)

Solidity v0.5.16 (solc-js)

Node v10.19.0

Web3.js v1.5.3


# Verifier contract address
On Rinkeby:

0x1c87b36A9Fee0a55b29eaa3049169Df57784D015

# SolnSquareVerifier contract Address

On Rinkeby:

0x87197c1a5911B3157B56a123e3Df2cAaF68Ee282

# Opensea Collection Address

All 10 tokens can be seen in the collection.

https://testnets.opensea.io/collection/uda-capstone-srkx

# How to run this project?

## Installing packages

At the root of the project, run `npm install`.

## Compiling smart contracts

Inside the /eth-contacts/ folder, run `npx truffle compile`

## Testing smart contracts

Inside the /eth-contacts/ folder, run `npx truffle test`

This will run 3 different test files:

1. TestERC721Mintable.js ensures ERC721 features are correctly implemented
2. TestSquareVerifier.js shows a Verifier contract was correctly generated using Zokrates and that it is able to approve correct proof and refect incorrect ones.
3. TestSolnSquareVerifier.js tests that solutions can be added to this custom ERC721 contract, and that there is a `mintProoved` function which allows to mint only if the correct solution was provided.

## Minting process

At the root of the project, there is a script called *mint.js*. It can be executed using by running : `node ./mint.js`.

Note that you will need to add the mnemonic of the wallet as well as the infura API key and the key contract information in the file **mintConfig.js**.

From a logic perspective, we first call the `addSolution` method to register a proof, and then `mintProoved` to mint a token from a provided solution. Arguably, these two functions could be merged.




# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


# Appendix: Full migration details

1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x1d8e12bcc245deefef3366afd0365fd1350c7361a4b9e198d6d928d0f4c97fd7
   > Blocks: 8            Seconds: 113
   > contract address:    0x1B14f9bBCc62991c72Ee0b8ED689B9699CE0bc01
   > block number:        9457409
   > block timestamp:     1634120562
   > account:             0xF12786a4d9F3d9F4135F1d3d4F5A944A3fd58ef3
   > balance:             3.980657973807601946
   > gas used:            226537 (0x374e9)
   > gas price:           1.000000046 gwei
   > value sent:          0 ETH
   > total cost:          0.000226537010420702 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000226537010420702 ETH


2_deploy_contracts.js
=====================
!!!Starting to deploy!!!!

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0xed79f12740ac6b3406840a139ec7883d54966a788c6e6f5e6f6d8285529ff6ed
   > Blocks: 1            Seconds: 9
   > contract address:    0x1c87b36A9Fee0a55b29eaa3049169Df57784D015
   > block number:        9457411
   > block timestamp:     1634120592
   > account:             0xF12786a4d9F3d9F4135F1d3d4F5A944A3fd58ef3
   > balance:             3.97963444476345291
   > gas used:            977766 (0xeeb66)
   > gas price:           1.000000043 gwei
   > value sent:          0 ETH
   > total cost:          0.000977766042043938 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xa024c7a01fec99084992bc2c47138bad87ef7d6f9129e9804f15468680c9f1fd
   > Blocks: 2            Seconds: 21
   > contract address:    0x87197c1a5911B3157B56a123e3Df2cAaF68Ee282
   > block number:        9457413
   > block timestamp:     1634120622
   > account:             0xF12786a4d9F3d9F4135F1d3d4F5A944A3fd58ef3
   > balance:             3.976134301619947047
   > gas used:            3500143 (0x35686f)
   > gas price:           1.000000041 gwei
   > value sent:          0 ETH
   > total cost:          0.003500143143505863 ETH

Verifier address: 0x1c87b36A9Fee0a55b29eaa3049169Df57784D015
SolnSquareVerifier address: 0x87197c1a5911B3157B56a123e3Df2cAaF68Ee282