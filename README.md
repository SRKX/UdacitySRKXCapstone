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


# Contract ABI

`{
  "contractName": "SolnSquareVerifier",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "verifierAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "solver",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "UnPaused",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "addSolution",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "firstInput",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "secondInput",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mintProoved",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"verifierAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"solver\",\"type\":\"address\"}],\"name\":\"SolutionAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"UnPaused\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_myid\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_myid\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_result\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"_proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256[2]\",\"name\":\"a\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2][2]\",\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"c\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"input\",\"type\":\"uint256[2]\"}],\"name\":\"addSolution\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"baseTokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"firstInput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"secondInput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mintProoved\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"implement supportsInterface(bytes4) using a lookup table\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract\",\"return\":\"uint256 representing the total amount of tokens\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/SolnSquareVerifier.sol\":\"SolnSquareVerifier\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"openzeppelin-solidity/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5be8533c5950173dc2b77b75108fae6e6c5449aedadde3385ba457394aad2384\",\"urls\":[\"bzz-raw://d429fb04f5b31d909dc759d0f88e28055b80b4dd43e5def4dffc947fa0609229\",\"dweb:/ipfs/QmaY9idX5CwLLtjjTQAdiiaDSrncgafkatUZXTbbajpz8b\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzz-raw://d877a87c5e29b9ffca3e334378058c051a4e012fd3635039681003a9376baf1f\",\"dweb:/ipfs/QmR45snf93cFXtB71TZcmoGy9DbcMha8CqgkDKaLvhjXZK\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\",\"urls\":[\"bzz-raw://03335b7b07c7c8c8d613cfdd8ec39a0b5ec133ee510bf2fe6cc5a496767bef4b\",\"dweb:/ipfs/Qmebp4nzPja645c9yXSdJkGq96oU3am3LUnG2K3R7XxyKf\"]},\"project:/contracts/ERC721Mintable.sol\":{\"keccak256\":\"0x61d761c089273ab7bba66fcc9082a5e60c1fcfed09c5c56fbd42e673d4ef82c3\",\"urls\":[\"bzz-raw://60092291459077dcd5f4ee5adcf9d4de8a7e39ef35d1348f0e2c2c9939baf44d\",\"dweb:/ipfs/QmdbvKWZ7WqtbKxR2A4KRzM3PofPvrGzeDNKGhNtTbPtZT\"]},\"project:/contracts/Oraclize.sol\":{\"keccak256\":\"0xe5ebe286b4624095629f76c6ac8dbad3cb305fbdb43fff09e4eebed35a05b49c\",\"urls\":[\"bzz-raw://681373c60944fa44771ccea64da3a0e1b428255757df53cfee06eae96f4ac91d\",\"dweb:/ipfs/QmWS7E26x3aXyYEZSzhTTpr8Pu11y5NK9p9iMwwvm7tMsz\"]},\"project:/contracts/SolnSquareVerifier.sol\":{\"keccak256\":\"0x9b05956b8f4bb71e1c34c692c0d6bdf3f462c1cea0d58fd724fc3ab802ae4de6\",\"urls\":[\"bzz-raw://ed2490f80e84849d746f49418bc88fa800fd429039d0de6d035bc8c2cb950653\",\"dweb:/ipfs/QmX7WHvd7z1oExo6g8JUZByMXkVnaDTj1mb8XvwMcxLvME\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162003f2438038062003f24833981810160405260608110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011f57600080fd5b838201915060208201858111156200013657600080fd5b82518660018202830111640100000000821117156200015457600080fd5b8083526020830192505050908051906020019080838360005b838110156200018a5780820151818401526020810190506200016d565b50505050905090810190601f168015620001b85780820380516001836020036101000a031916815260200191505b50604052505050818181816040518060600160405280603f815260200162003ee5603f9139336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a160008060146101000a81548160ff021916908315150217905550620003086301ffc9a760e01b620003ea60201b60201c565b620003206380ac58cd60e01b620003ea60201b60201c565b6200033863780e9d6360e01b620003ea60201b60201c565b82600f9080519060200190620003509291906200048a565b508160109080519060200190620003699291906200048a565b508060119080519060200190620003829291906200048a565b506200039b635b5e139f60e01b620003ea60201b60201c565b505050505082601360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000539565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200041e57600080fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004cd57805160ff1916838001178555620004fe565b82800160010185558215620004fe579182015b82811115620004fd578251825591602001919060010190620004e0565b5b5090506200050d919062000511565b5090565b6200053691905b808211156200053257600081600090555060010162000518565b5090565b90565b61399c80620005496000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636352211e116100de578063afc47b8511610097578063d547cfb711610071578063d547cfb714610b6f578063e985e9c514610bf2578063f2fde38b14610c6e578063f76b443114610cb25761018e565b8063afc47b8514610953578063b88d4fde146109c3578063c87b56dd14610ac85761018e565b80636352211e1461076657806370a08231146107d45780638456cb591461082c5780638da5cb5b1461083657806395d89b4114610880578063a22cb465146109035761018e565b806327dc297e1161014b5780633f4ba83a116101255780633f4ba83a1461064657806340c10f191461065057806342842e0e146106b65780634f6ccce7146107245761018e565b806327dc297e146103c35780632f745c591461048857806338bbfa50146104ea5761018e565b806301ffc9a71461019357806306fdde03146101f8578063081812fc1461027b578063095ea7b3146102e957806318160ddd1461033757806323b872dd14610355575b600080fd5b6101de600480360360208110156101a957600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e2b565b604051808215151515815260200191505060405180910390f35b610200610e93565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610240578082015181840152602081019050610225565b50505050905090810190601f16801561026d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a76004803603602081101561029157600080fd5b8101908080359060200190929190505050610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610335600480360360408110156102ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061101a565b005b61033f611210565b6040518082815260200191505060405180910390f35b6103c16004803603606081101561036b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061121d565b005b610486600480360360408110156103d957600080fd5b81019080803590602001909291908035906020019064010000000081111561040057600080fd5b82018360208201111561041257600080fd5b8035906020019184600183028401116401000000008311171561043457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611240565b005b6104d46004803603604081101561049e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611283565b6040518082815260200191505060405180910390f35b6106446004803603606081101561050057600080fd5b81019080803590602001909291908035906020019064010000000081111561052757600080fd5b82018360208201111561053957600080fd5b8035906020019184600183028401116401000000008311171561055b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105be57600080fd5b8201836020820111156105d057600080fd5b803590602001918460018302840111640100000000831117156105f257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112f6565b005b61064e6112fb565b005b61069c6004803603604081101561066657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113ac565b604051808215151515815260200191505060405180910390f35b610722600480360360608110156106cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611470565b005b6107506004803603602081101561073a57600080fd5b8101908080359060200190929190505050611490565b6040518082815260200191505060405180910390f35b6107926004803603602081101561077c57600080fd5b81019080803590602001909291905050506114c4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610816600480360360208110156107ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115a9565b6040518082815260200191505060405180910390f35b6108346115f9565b005b61083e6116aa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108886116d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109516004803603604081101561091957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611775565b005b6109a96004803603606081101561096957600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118af565b604051808215151515815260200191505060405180910390f35b610ac6600480360360808110156109d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610a4057600080fd5b820183602082011115610a5257600080fd5b80359060200191846001830284011164010000000083111715610a7457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b14565b005b610af460048036036020811015610ade57600080fd5b8101908080359060200190929190505050611b3a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b34578082015181840152602081019050610b19565b50505050905090810190601f168015610b615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b77611c01565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bb7578082015181840152602081019050610b9c565b50505050905090810190601f168015610be45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c5460048036036040811015610c0857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ca3565b604051808215151515815260200191505060405180910390f35b610cb060048036036020811015610c8457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d37565b005b610e116004803603610140811015610cc957600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610d7e578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610d2a565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611f84565b604051808215151515815260200191505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f2b5780601f10610f0057610100808354040283529160200191610f2b565b820191906000526020600020905b815481529060010190602001808311610f0e57829003601f168201915b5050505050905090565b6000806003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4e6f20617070726f76616c20666f7220676976656e20746f6b656e000000000081525060200191505060405180910390fd5b80915050919050565b6000611025826114c4565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f417070726f7665722063616e6e6f742062652063757272656e74206f776e657281525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061110957506111088133611ca3565b5b61115e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806138c46039913960400191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600880549050905090565b6112273382612447565b61123057600080fd5b61123b8383836124dc565b505050565b61127f828260006040519080825280601f01601f1916602001820160405280156112795781602001600182028038833980820191505090505b506112f6565b5050565b600061128e836115a9565b821061129957600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106112e357fe5b9060005260206000200154905092915050565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b6113aa6000612500565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611453576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b61145d838361266a565b6114668261268b565b6001905092915050565b61148b83838360405180602001604052806000815250611b14565b505050565b600061149a611210565b82106114a557600080fd5b600882815481106114b257fe5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f546f6b656e20686173206e6f206f776e6572000000000000000000000000000081525060200191505060405180910390fd5b80915050919050565b60006115f2600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127dc565b9050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461169e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b6116a86001612500565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060108054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561176b5780601f106117405761010080835404028352916020019161176b565b820191906000526020600020905b81548152906001019060200180831161174e57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117ae57600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600080848460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506000601560008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156119c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f536f6c7574696f6e20776173206e6f742061646465640000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806138fd6028913960400191505060405180910390fd5b8060010160149054906101000a900460ff1615611ad1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806138756021913960400191505060405180910390fd5b6000611ae18583600001546113ac565b90508015611b075760018260010160146101000a81548160ff0219169083151502179055505b8093505050509392505050565b611b1f84848461121d565b611b2b848484846127ea565b611b3457600080fd5b50505050565b6060611b45826129d3565b611b4e57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf55780601f10611bca57610100808354040283529160200191611bf5565b820191906000526020600020905b815481529060010190602001808311611bd857829003601f168201915b50505050509050919050565b606060118054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c995780601f10611c6e57610100808354040283529160200191611c99565b820191906000526020600020905b815481529060010190602001808311611c7c57829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ddc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611e62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806139256022913960400191505060405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0816000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b60008082600060028110611f9457fe5b602002015183600160028110611fa657fe5b60200201516040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166015600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f54686520736f6c7574696f6e2077617320616c7265616479206164646564000081525060200191505060405180910390fd5b6000601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0888888886040518563ffffffff1660e01b81526004018085600260200280838360005b83811015612130578082015181840152602081019050612115565b505050509050018460026000925b818410156121845782846020020151600260200280838360005b83811015612173578082015181840152602081019050612158565b50505050905001926001019261213e565b9250505083600260200280838360005b838110156121af578082015181840152602081019050612194565b5050505090500182600260200280838360005b838110156121dd5780820151818401526020810190506121c2565b50505050905001945050505050602060405180830381600087803b15801561220457600080fd5b505af1158015612218573d6000803e3d6000fd5b505050506040513d602081101561222e57600080fd5b81019080805190602001909291905050509050806122b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f50726f76696465642070726f6f6620697320696e76616c69640000000000000081525060200191505060405180910390fd5b60405180606001604052806122c960146127dc565b81526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601560008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050507f078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d60156000848152602001908152602001600020600001546015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16124396014612a45565b600192505050949350505050565b600080612453836114c4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124c257508373ffffffffffffffffffffffffffffffffffffffff166124aa84610f35565b73ffffffffffffffffffffffffffffffffffffffff16145b806124d357506124d28185611ca3565b5b91505092915050565b6124e7838383612a5b565b6124f18382612d06565b6124fb8282612ea4565b505050565b600060149054906101000a900460ff161515811515141561256c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061384c6029913960400191505060405180910390fd5b80600060146101000a81548160ff021916908315150217905550600060149054906101000a900460ff1615612603577f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1612667565b7fff2b959f2bcdb44c7ecb4b16dae055431019d7350607125cfc2b74a06632c90e33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b6126748282612f6b565b61267e8282612ea4565b61268781613183565b5050565b612694816129d3565b612706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f546f6b656e20646f6573206e6f7420657869737473000000000000000000000081525060200191505060405180910390fd5b6127b260118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561279f5780601f106127745761010080835404028352916020019161279f565b820191906000526020600020905b81548152906001019060200180831161278257829003601f168201915b50505050506127ad836131cf565b6132fc565b6012600083815260200190815260200160002090805190602001906127d892919061377a565b5050565b600081600001549050919050565b600061280b8473ffffffffffffffffffffffffffffffffffffffff16613340565b61281857600190506129cb565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156128f35780820151818401526020810190506128d8565b50505050905090810190601f1680156129205780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561294257600080fd5b505af1158015612956573d6000803e3d6000fd5b505050506040513d602081101561296c57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6001816000016000828254019250508190555050565b6000612a66826114c4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612b09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f746f6b656e206e6f74207472616e736665727265642066726f6d206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612b8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180613896602e913960400191505060405180910390fd5b6003600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055612c0c600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061338b565b612c53600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a45565b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b6000612d5e6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506133ae90919063ffffffff16565b9050600060076000848152602001908152602001600020549050818114612e4b576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612dcb57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612e2357fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612e9d91906137fa565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561300e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f43616e6e6f74206d696e7420746f20302061646472657373000000000000000081525060200191505060405180910390fd5b613017816129d3565b1561308a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613123600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a45565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60606000821415613217576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506132f7565b600082905060005b60008214613241578080600101915050600a828161323957fe5b04915061321f565b6060816040519080825280601f01601f1916602001820160405280156132765781602001600182028038833980820191505090505b50905060006001830390505b600086146132ef57600a868161329457fe5b0660300160f81b828280600190039350815181106132ae57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86816132e757fe5b049550613282565b819450505050505b919050565b606061333883836040518060200160405280600081525060405180602001604052806000815250604051806020016040528060008152506133f8565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561338257506000801b8214155b92505050919050565b6133a3600182600001546133ae90919063ffffffff16565b816000018190555050565b60006133f083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506136ba565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f1916602001820160405280156134545781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b88518110156134d95788818151811061348057fe5b602001015160f81c60f81b83838060010194508151811061349d57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061346b565b600090505b875181101561354c578781815181106134f357fe5b602001015160f81c60f81b83838060010194508151811061351057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506134de565b600090505b86518110156135bf5786818151811061356657fe5b602001015160f81c60f81b83838060010194508151811061358357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613551565b600090505b8551811015613632578581815181106135d957fe5b602001015160f81c60f81b8383806001019450815181106135f657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506135c4565b600090505b84518110156136a55784818151811061364c57fe5b602001015160f81c60f81b83838060010194508151811061366957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613637565b82995050505050505050505095945050505050565b6000838311158290613767576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561372c578082015181840152602081019050613711565b50505050905090810190601f1680156137595780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106137bb57805160ff19168380011785556137e9565b828001600101855582156137e9579182015b828111156137e85782518255916020019190600101906137cd565b5b5090506137f69190613826565b5090565b815481835581811115613821578183600052602060002091820191016138209190613826565b5b505050565b61384891905b8082111561384457600081600090555060010161382c565b5090565b9056fe436f6e74726163742070617573652076616c756520616c726561647920617320726571756573746564536f6c7574696f6e20616c7265616479207573656420666f72206d696e74696e67546f6b656e2063616e6e6f74206265207472616e7366657272656420746f20696e76616c6964206164647265737353656e64657220646f6573206e6f74206861766520746865207065726d697373696f6e20746f207472616e736665722074686520746f6b656e536f6c7574696f6e20776173206e6f742061646465642062792063757272656e742073656e64657241646472657373206f66206e6577206f776e6572206d7573742062652076616c696443616c6c6572206d7573742062652074686520636f6e7472616374206f776e6572a265627a7a723158200bd98aab7c1c2fe3b87642a86b34cbf4fa2fa673e326f142d41e24a0a9fa118864736f6c6343000510003268747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f756461636974792d626c6f636b636861696e2f63617073746f6e652f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c80636352211e116100de578063afc47b8511610097578063d547cfb711610071578063d547cfb714610b6f578063e985e9c514610bf2578063f2fde38b14610c6e578063f76b443114610cb25761018e565b8063afc47b8514610953578063b88d4fde146109c3578063c87b56dd14610ac85761018e565b80636352211e1461076657806370a08231146107d45780638456cb591461082c5780638da5cb5b1461083657806395d89b4114610880578063a22cb465146109035761018e565b806327dc297e1161014b5780633f4ba83a116101255780633f4ba83a1461064657806340c10f191461065057806342842e0e146106b65780634f6ccce7146107245761018e565b806327dc297e146103c35780632f745c591461048857806338bbfa50146104ea5761018e565b806301ffc9a71461019357806306fdde03146101f8578063081812fc1461027b578063095ea7b3146102e957806318160ddd1461033757806323b872dd14610355575b600080fd5b6101de600480360360208110156101a957600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e2b565b604051808215151515815260200191505060405180910390f35b610200610e93565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610240578082015181840152602081019050610225565b50505050905090810190601f16801561026d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a76004803603602081101561029157600080fd5b8101908080359060200190929190505050610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610335600480360360408110156102ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061101a565b005b61033f611210565b6040518082815260200191505060405180910390f35b6103c16004803603606081101561036b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061121d565b005b610486600480360360408110156103d957600080fd5b81019080803590602001909291908035906020019064010000000081111561040057600080fd5b82018360208201111561041257600080fd5b8035906020019184600183028401116401000000008311171561043457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611240565b005b6104d46004803603604081101561049e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611283565b6040518082815260200191505060405180910390f35b6106446004803603606081101561050057600080fd5b81019080803590602001909291908035906020019064010000000081111561052757600080fd5b82018360208201111561053957600080fd5b8035906020019184600183028401116401000000008311171561055b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105be57600080fd5b8201836020820111156105d057600080fd5b803590602001918460018302840111640100000000831117156105f257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112f6565b005b61064e6112fb565b005b61069c6004803603604081101561066657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113ac565b604051808215151515815260200191505060405180910390f35b610722600480360360608110156106cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611470565b005b6107506004803603602081101561073a57600080fd5b8101908080359060200190929190505050611490565b6040518082815260200191505060405180910390f35b6107926004803603602081101561077c57600080fd5b81019080803590602001909291905050506114c4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610816600480360360208110156107ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115a9565b6040518082815260200191505060405180910390f35b6108346115f9565b005b61083e6116aa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108886116d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108c85780820151818401526020810190506108ad565b50505050905090810190601f1680156108f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109516004803603604081101561091957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611775565b005b6109a96004803603606081101561096957600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118af565b604051808215151515815260200191505060405180910390f35b610ac6600480360360808110156109d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610a4057600080fd5b820183602082011115610a5257600080fd5b80359060200191846001830284011164010000000083111715610a7457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b14565b005b610af460048036036020811015610ade57600080fd5b8101908080359060200190929190505050611b3a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b34578082015181840152602081019050610b19565b50505050905090810190601f168015610b615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b77611c01565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bb7578082015181840152602081019050610b9c565b50505050905090810190601f168015610be45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c5460048036036040811015610c0857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ca3565b604051808215151515815260200191505060405180910390f35b610cb060048036036020811015610c8457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d37565b005b610e116004803603610140811015610cc957600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610d7e578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610d2a565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611f84565b604051808215151515815260200191505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f2b5780601f10610f0057610100808354040283529160200191610f2b565b820191906000526020600020905b815481529060010190602001808311610f0e57829003601f168201915b5050505050905090565b6000806003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4e6f20617070726f76616c20666f7220676976656e20746f6b656e000000000081525060200191505060405180910390fd5b80915050919050565b6000611025826114c4565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f417070726f7665722063616e6e6f742062652063757272656e74206f776e657281525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061110957506111088133611ca3565b5b61115e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806138c46039913960400191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600880549050905090565b6112273382612447565b61123057600080fd5b61123b8383836124dc565b505050565b61127f828260006040519080825280601f01601f1916602001820160405280156112795781602001600182028038833980820191505090505b506112f6565b5050565b600061128e836115a9565b821061129957600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106112e357fe5b9060005260206000200154905092915050565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b6113aa6000612500565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611453576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b61145d838361266a565b6114668261268b565b6001905092915050565b61148b83838360405180602001604052806000815250611b14565b505050565b600061149a611210565b82106114a557600080fd5b600882815481106114b257fe5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f546f6b656e20686173206e6f206f776e6572000000000000000000000000000081525060200191505060405180910390fd5b80915050919050565b60006115f2600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127dc565b9050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461169e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b6116a86001612500565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060108054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561176b5780601f106117405761010080835404028352916020019161176b565b820191906000526020600020905b81548152906001019060200180831161174e57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117ae57600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600080848460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506000601560008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156119c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f536f6c7574696f6e20776173206e6f742061646465640000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806138fd6028913960400191505060405180910390fd5b8060010160149054906101000a900460ff1615611ad1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806138756021913960400191505060405180910390fd5b6000611ae18583600001546113ac565b90508015611b075760018260010160146101000a81548160ff0219169083151502179055505b8093505050509392505050565b611b1f84848461121d565b611b2b848484846127ea565b611b3457600080fd5b50505050565b6060611b45826129d3565b611b4e57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf55780601f10611bca57610100808354040283529160200191611bf5565b820191906000526020600020905b815481529060010190602001808311611bd857829003601f168201915b50505050509050919050565b606060118054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c995780601f10611c6e57610100808354040283529160200191611c99565b820191906000526020600020905b815481529060010190602001808311611c7c57829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ddc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806139476021913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611e62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806139256022913960400191505060405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0816000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b60008082600060028110611f9457fe5b602002015183600160028110611fa657fe5b60200201516040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166015600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f54686520736f6c7574696f6e2077617320616c7265616479206164646564000081525060200191505060405180910390fd5b6000601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0888888886040518563ffffffff1660e01b81526004018085600260200280838360005b83811015612130578082015181840152602081019050612115565b505050509050018460026000925b818410156121845782846020020151600260200280838360005b83811015612173578082015181840152602081019050612158565b50505050905001926001019261213e565b9250505083600260200280838360005b838110156121af578082015181840152602081019050612194565b5050505090500182600260200280838360005b838110156121dd5780820151818401526020810190506121c2565b50505050905001945050505050602060405180830381600087803b15801561220457600080fd5b505af1158015612218573d6000803e3d6000fd5b505050506040513d602081101561222e57600080fd5b81019080805190602001909291905050509050806122b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f50726f76696465642070726f6f6620697320696e76616c69640000000000000081525060200191505060405180910390fd5b60405180606001604052806122c960146127dc565b81526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601560008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050507f078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d60156000848152602001908152602001600020600001546015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16124396014612a45565b600192505050949350505050565b600080612453836114c4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124c257508373ffffffffffffffffffffffffffffffffffffffff166124aa84610f35565b73ffffffffffffffffffffffffffffffffffffffff16145b806124d357506124d28185611ca3565b5b91505092915050565b6124e7838383612a5b565b6124f18382612d06565b6124fb8282612ea4565b505050565b600060149054906101000a900460ff161515811515141561256c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061384c6029913960400191505060405180910390fd5b80600060146101000a81548160ff021916908315150217905550600060149054906101000a900460ff1615612603577f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1612667565b7fff2b959f2bcdb44c7ecb4b16dae055431019d7350607125cfc2b74a06632c90e33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b6126748282612f6b565b61267e8282612ea4565b61268781613183565b5050565b612694816129d3565b612706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f546f6b656e20646f6573206e6f7420657869737473000000000000000000000081525060200191505060405180910390fd5b6127b260118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561279f5780601f106127745761010080835404028352916020019161279f565b820191906000526020600020905b81548152906001019060200180831161278257829003601f168201915b50505050506127ad836131cf565b6132fc565b6012600083815260200190815260200160002090805190602001906127d892919061377a565b5050565b600081600001549050919050565b600061280b8473ffffffffffffffffffffffffffffffffffffffff16613340565b61281857600190506129cb565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156128f35780820151818401526020810190506128d8565b50505050905090810190601f1680156129205780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561294257600080fd5b505af1158015612956573d6000803e3d6000fd5b505050506040513d602081101561296c57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6001816000016000828254019250508190555050565b6000612a66826114c4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612b09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f746f6b656e206e6f74207472616e736665727265642066726f6d206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612b8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180613896602e913960400191505060405180910390fd5b6003600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055612c0c600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061338b565b612c53600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a45565b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b6000612d5e6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506133ae90919063ffffffff16565b9050600060076000848152602001908152602001600020549050818114612e4b576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612dcb57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612e2357fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612e9d91906137fa565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561300e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f43616e6e6f74206d696e7420746f20302061646472657373000000000000000081525060200191505060405180910390fd5b613017816129d3565b1561308a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613123600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a45565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60606000821415613217576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506132f7565b600082905060005b60008214613241578080600101915050600a828161323957fe5b04915061321f565b6060816040519080825280601f01601f1916602001820160405280156132765781602001600182028038833980820191505090505b50905060006001830390505b600086146132ef57600a868161329457fe5b0660300160f81b828280600190039350815181106132ae57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86816132e757fe5b049550613282565b819450505050505b919050565b606061333883836040518060200160405280600081525060405180602001604052806000815250604051806020016040528060008152506133f8565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561338257506000801b8214155b92505050919050565b6133a3600182600001546133ae90919063ffffffff16565b816000018190555050565b60006133f083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506136ba565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f1916602001820160405280156134545781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b88518110156134d95788818151811061348057fe5b602001015160f81c60f81b83838060010194508151811061349d57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061346b565b600090505b875181101561354c578781815181106134f357fe5b602001015160f81c60f81b83838060010194508151811061351057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506134de565b600090505b86518110156135bf5786818151811061356657fe5b602001015160f81c60f81b83838060010194508151811061358357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613551565b600090505b8551811015613632578581815181106135d957fe5b602001015160f81c60f81b8383806001019450815181106135f657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506135c4565b600090505b84518110156136a55784818151811061364c57fe5b602001015160f81c60f81b83838060010194508151811061366957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613637565b82995050505050505050505095945050505050565b6000838311158290613767576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561372c578082015181840152602081019050613711565b50505050905090810190601f1680156137595780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106137bb57805160ff19168380011785556137e9565b828001600101855582156137e9579182015b828111156137e85782518255916020019190600101906137cd565b5b5090506137f69190613826565b5090565b815481835581811115613821578183600052602060002091820191016138209190613826565b5b505050565b61384891905b8082111561384457600081600090555060010161382c565b5090565b9056fe436f6e74726163742070617573652076616c756520616c726561647920617320726571756573746564536f6c7574696f6e20616c7265616479207573656420666f72206d696e74696e67546f6b656e2063616e6e6f74206265207472616e7366657272656420746f20696e76616c6964206164647265737353656e64657220646f6573206e6f74206861766520746865207065726d697373696f6e20746f207472616e736665722074686520746f6b656e536f6c7574696f6e20776173206e6f742061646465642062792063757272656e742073656e64657241646472657373206f66206e6577206f776e6572206d7573742062652076616c696443616c6c6572206d7573742062652074686520636f6e7472616374206f776e6572a265627a7a723158200bd98aab7c1c2fe3b87642a86b34cbf4fa2fa673e326f142d41e24a0a9fa118864736f6c63430005100032",
  "sourceMap": "579:3522:6:-;;;689:188;8:9:-1;5:2;;;30:1;27;20:12;5:2;689:188:6;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;689:188:6;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;689:188:6;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;689:188:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;689:188:6;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;689:188:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;789:4;795:6;23676:4:4;23682:6;21398:285;;;;;;;;;;;;;;;;;937:10;928:6;;:19;;;;;;;;;;;;;;;;;;962:40;991:1;995:6;;;;;;;;;;;962:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2440:5;2430:7;;:15;;;;;;;;;;;;;;;;;;3801:40;3398:10;3820:20;;3801:18;;;:40;;:::i;:::-;5947;5821:10;5966:20;;5947:18;;;:40;;:::i;:::-;14099:51;13705:10;14118:31;;14099:18;;;:51;;:::i;:::-;21548:4;21540:5;:12;;;;;;;;;;;;:::i;:::-;;21572:6;21562:7;:16;;;;;;;;;;;;:::i;:::-;;21604:12;21588:13;:28;;;;;;;;;;;;:::i;:::-;;21627:49;21209:10;21646:29;;21627:18;;;:49;;:::i;:::-;21398:285;;;23606:170;;854:15:6;820:16;;:50;;;;;;;;;;;;;;;;;;689:188;;;579:3522;;4151:158:4;4241:10;4226:25;;:11;:25;;;;;4218:34;;;;;;4298:4;4262:20;:33;4283:11;4262:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;4151:158;:::o;579:3522:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "579:3522:6:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;579:3522:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3939:133:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3939:133:4;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;21779:82;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21779:82:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7454:361;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7454:361:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6686:762;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6686:762:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14864:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8792:180;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8792:180:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14801:122:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14801:122:5;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14801:122:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14801:122:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14801:122:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14801:122:5;;;;;;;;;;;;;;;:::i;:::-;;14530:182:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14530:182:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;14929:166:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14929:166:5;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14929:166:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14929:166:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14929:166:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14929:166:5;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14929:166:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14929:166:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14929:166:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14929:166:5;;;;;;;;;;;;;;;:::i;:::-;;2765:101:4;;;:::i;:::-;;23794:185;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;23794:185:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;8978:132;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8978:132:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;15295:148;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15295:148:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6301:312;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6301:312:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6000:295;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6000:295:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2662:97;;;:::i;:::-;;1634:76;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;21867:86;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21867:86:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8107:213;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8107:213:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3047:1046:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3047:1046:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;9116:211:4;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;9116:211:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;9116:211:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;9116:211:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;9116:211:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;9116:211:4;;;;;;;;;;;;;;;:::i;:::-;;22065:151;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;22065:151:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;22065:151:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21959:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21959:98:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8641:145;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8641:145:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1137:491;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1137:491:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;1642:1176:6;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1642:1176:6;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1642:1176:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1642:1176:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1642:1176:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1642:1176:6;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3939:133:4;4009:4;4032:20;:33;4053:11;4032:33;;;;;;;;;;;;;;;;;;;;;;;;;;;4025:40;;3939:133;;;:::o;21779:82::-;21817:13;21849:5;21842:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21779:82;:::o;7454:361::-;7513:7;7591:16;7610:15;:24;7626:7;7610:24;;;;;;;;;;;;;;;;;;;;;7591:43;;7719:1;7701:20;;:8;:20;;;;7693:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7800:8;7793:15;;;7454:361;;;:::o;6686:762::-;6797:13;6813:16;6821:7;6813;:16::i;:::-;6797:32;;6950:2;6941:11;;:5;:11;;;;6933:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7129:10;7120:19;;:5;:19;;;:60;;;;7143:37;7161:5;7168:10;7143:16;:37::i;:::-;7120:60;7112:130;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7341:2;7314:15;:24;7330:7;7314:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;7432:7;7428:2;7412:28;;7421:5;7412:28;;;;;;;;;;;;6686:762;;;:::o;14864:94::-;14908:7;14934:10;:17;;;;14927:24;;14864:94;:::o;8792:180::-;8882:39;8901:10;8913:7;8882:18;:39::i;:::-;8874:48;;;;;;8933:32;8947:4;8953:2;8957:7;8933:13;:32::i;:::-;8792:180;;;:::o;14801:122:5:-;14876:40;14887:5;14894:7;14913:1;14903:12;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;14903:12:5;;;;14876:10;:40::i;:::-;14801:122;;:::o;14530:182:4:-;14610:7;14645:16;14655:5;14645:9;:16::i;:::-;14637:5;:24;14629:33;;;;;;14679:12;:19;14692:5;14679:19;;;;;;;;;;;;;;;14699:5;14679:26;;;;;;;;;;;;;;;;14672:33;;14530:182;;;;:::o;14929:166:5:-;;;;:::o;2765:101:4:-;1069:6;;;;;;;;;;;1055:20;;:10;:20;;;1046:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2842:17;2853:5;2842:10;:17::i;:::-;2765:101::o;23794:185::-;23865:4;1069:6;;;;;;;;;;;1055:20;;:10;:20;;;1046:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23885:24;23897:2;23901:7;23885:11;:24::i;:::-;23923:20;23935:7;23923:11;:20::i;:::-;23964:4;23957:11;;23794:185;;;;:::o;8978:132::-;9064:39;9081:4;9087:2;9091:7;9064:39;;;;;;;;;;;;:16;:39::i;:::-;8978:132;;;:::o;15295:148::-;15353:7;15388:13;:11;:13::i;:::-;15380:5;:21;15372:30;;;;;;15419:10;15430:5;15419:17;;;;;;;;;;;;;;;;15412:24;;15295:148;;;:::o;6301:312::-;6356:7;6437:13;6453:11;:22;6466:7;6453:22;;;;;;;;;;;;;;;;;;;;;6437:38;;6557:1;6540:19;;:5;:19;;;;6531:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6600:5;6593:12;;;6301:312;;;:::o;6000:295::-;6055:7;6252:36;:17;:26;6271:5;6252:26;;;;;;;;;;;;;;;:34;:36::i;:::-;6245:43;;6000:295;;;:::o;2662:97::-;1069:6;;;;;;;;;;;1055:20;;:10;:20;;;1046:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2736:16;2747:4;2736:10;:16::i;:::-;2662:97::o;1634:76::-;1671:7;1697:6;;;;;;;;;;;1690:13;;1634:76;:::o;21867:86::-;21907:13;21939:7;21932:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21867:86;:::o;8107:213::-;8192:10;8186:16;;:2;:16;;;;8178:25;;;;;;8250:8;8213:18;:30;8232:10;8213:30;;;;;;;;;;;;;;;:34;8244:2;8213:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;8300:2;8273:40;;8288:10;8273:40;;;8304:8;8273:40;;;;;;;;;;;;;;;;;;;;;;8107:213;;:::o;3047:1046:6:-;3149:4;3240:20;3290:10;3301:11;3273:40;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3273:40:6;;;3263:51;;;;;;3240:74;;3325:20;3348:9;:23;3358:12;3348:23;;;;;;;;;;;3325:46;;3460:1;3438:24;;:3;:10;;;;;;;;;;;;:24;;;;3430:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3573:10;3559:24;;:3;:10;;;;;;;;;;;;:24;;;3551:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3727:3;:13;;;;;;;;;;;;3726:14;3718:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3848:11;3862:19;3867:2;3871:3;:9;;;3862:4;:19::i;:::-;3848:33;;3939:6;3935:127;;;4047:4;4031:3;:13;;;:20;;;;;;;;;;;;;;;;;;3935:127;4079:6;4072:13;;;;;3047:1046;;;;;:::o;9116:211:4:-;9222:31;9235:4;9241:2;9245:7;9222:12;:31::i;:::-;9271:48;9294:4;9300:2;9304:7;9313:5;9271:22;:48::i;:::-;9263:57;;;;;;9116:211;;;;:::o;22065:151::-;22123:13;22156:16;22164:7;22156;:16::i;:::-;22148:25;;;;;;22190:10;:19;22201:7;22190:19;;;;;;;;;;;22183:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22065:151;;;:::o;21959:98::-;22005:13;22037;22030:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21959:98;:::o;8641:145::-;8721:4;8744:18;:25;8763:5;8744:25;;;;;;;;;;;;;;;:35;8770:8;8744:35;;;;;;;;;;;;;;;;;;;;;;;;;8737:42;;8641:145;;;;:::o;1137:491::-;1069:6;;;;;;;;;;;1055:20;;:10;:20;;;1046:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1376:1;1356:22;;:8;:22;;;;1347:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1465:16;1484:6;;;;;;;;;;;1465:25;;1536:8;1527:6;;:17;;;;;;;;;;;;;;;;;;1581:38;1602:8;1612:6;;;;;;;;;;;1581:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1123:1;1137:491;:::o;1642:1176:6:-;1816:4;1907:20;1957:5;1963:1;1957:8;;;;;;;;;;;1966:5;1972:1;1966:8;;;;;;;;;;;1940:35;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1940:35:6;;;1930:46;;;;;;1907:69;;2075:1;2035:42;;:9;:23;2045:12;2035:23;;;;;;;;;;;:30;;;;;;;;;;;;:42;;;2027:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2164:17;2184:16;;;;;;;;;;;:25;;;2210:1;2213;2216;2219:5;2184:41;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2184:41:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2184:41:6;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2184:41:6;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2184:41:6;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2184:41:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2184:41:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2184:41:6;;;;;;;;;;;;;;;;2164:61;;2243:12;2235:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2452:102;;;;;;;;2474:27;:17;:25;:27::i;:::-;2452:102;;;;2515:10;2452:102;;;;;;2539:5;2452:102;;;;;2426:9;:23;2436:12;2426:23;;;;;;;;;;;:128;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2598:76;2612:9;:23;2622:12;2612:23;;;;;;;;;;;:29;;;2643:9;:23;2653:12;2643:23;;;;;;;;;;;:30;;;;;;;;;;;;2598:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;2720:29;:17;:27;:29::i;:::-;2807:4;2800:11;;;;1642:1176;;;;;;:::o;10033:246:4:-;10118:4;10134:13;10150:16;10158:7;10150;:16::i;:::-;10134:32;;10195:5;10184:16;;:7;:16;;;:51;;;;10228:7;10204:31;;:20;10216:7;10204:11;:20::i;:::-;:31;;;10184:51;:87;;;;10239:32;10256:5;10263:7;10239:16;:32::i;:::-;10184:87;10176:96;;;10033:246;;;;:::o;15818:239::-;15903:38;15923:4;15929:2;15933:7;15903:19;:38::i;:::-;15952:47;15985:4;15991:7;15952:32;:47::i;:::-;16010:40;16038:2;16042:7;16010:27;:40::i;:::-;15818:239;;;:::o;2878:446::-;3006:7;;;;;;;;;;;2994:19;;:8;:19;;;;2985:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3080:8;3070:7;;:18;;;;;;;;;;;;;;;;;;3103:7;;;;;;;;;;;3099:219;;;3173:18;3180:10;3173:18;;;;;;;;;;;;;;;;;;;;;;3099:219;;;3287:20;3296:10;3287:20;;;;;;;;;;;;;;;;;;;;;;3099:219;2878:446;:::o;16312:196::-;16375:24;16387:2;16391:7;16375:11;:24::i;:::-;16410:40;16438:2;16442:7;16410:27;:40::i;:::-;16461;16493:7;16461:31;:40::i;:::-;16312:196;;:::o;22694:225::-;22795:16;22803:7;22795;:16::i;:::-;22787:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22869:43;22879:13;22869:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22894:17;22903:7;22894:8;:17::i;:::-;22869:9;:43::i;:::-;22847:10;:19;22858:7;22847:19;;;;;;;;;;;:65;;;;;;;;;;;;:::i;:::-;;22694:225;:::o;1065:112:0:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;12550:347:4:-;12671:4;12696:15;:2;:13;;;:15::i;:::-;12691:58;;12734:4;12727:11;;;;12691:58;12759:13;12791:2;12775:36;;;12812:10;12824:4;12830:7;12839:5;12775:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;12775:70:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12775:70:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;12775:70:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12775:70:4;;;;;;;;;;;;;;;;12759:86;;4954:10;12873:16;;12863:26;;;:6;:26;;;;12855:35;;;12550:347;;;;;;;:::o;9521:152::-;9578:4;9594:13;9610:11;:20;9622:7;9610:20;;;;;;;;;;;;;;;;;;;;;9594:36;;9664:1;9647:19;;:5;:19;;;;9640:26;;;9521:152;;;:::o;1183:178:0:-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;11176:846:4:-;11367:13;11383:16;11391:7;11383;:16::i;:::-;11367:32;;11425:5;11417:13;;:4;:13;;;11409:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11578:1;11566:14;;:2;:14;;;;11558:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11696:15;:24;11712:7;11696:24;;;;;;;;;;;;11689:31;;;;;;;;;;;11813:36;:17;:24;11831:5;11813:24;;;;;;;;;;;;;;;:34;:36::i;:::-;11859:33;:17;:21;11877:2;11859:21;;;;;;;;;;;;;;;:31;:33::i;:::-;11925:2;11902:11;:20;11914:7;11902:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;12007:7;12003:2;11987:28;;11996:5;11987:28;;;;;;;;;;;;11176:846;;;;:::o;18284:1128::-;18546:22;18571:32;18601:1;18571:12;:18;18584:4;18571:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;18546:57;;18613:18;18634:17;:26;18652:7;18634:26;;;;;;;;;;;;18613:47;;18778:14;18764:10;:28;18760:323;;18808:19;18830:12;:18;18843:4;18830:18;;;;;;;;;;;;;;;18849:14;18830:34;;;;;;;;;;;;;;;;18808:56;;18912:11;18879:12;:18;18892:4;18879:18;;;;;;;;;;;;;;;18898:10;18879:30;;;;;;;;;;;;;;;:44;;;;19028:10;18995:17;:30;19013:11;18995:30;;;;;;;;;;;:43;;;;18760:323;;19169:12;:18;19182:4;19169:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;18284:1128;;;;:::o;17130:183::-;17243:12;:16;17256:2;17243:16;;;;;;;;;;;;;;;:23;;;;17214:17;:26;17232:7;17214:26;;;;;;;;;;;:52;;;;17276:12;:16;17289:2;17276:16;;;;;;;;;;;;;;;17298:7;17276:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;17276:30:4;;;;;;;;;;;;;;;;;;;;;;17130:183;;:::o;10436:541::-;10613:1;10599:16;;:2;:16;;;;10591:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10663:16;10671:7;10663;:16::i;:::-;10662:17;10654:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10832:2;10809:11;:20;10821:7;10809:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;10844:33;:17;:21;10862:2;10844:21;;;;;;;;;;;;;;;:31;:33::i;:::-;10962:7;10958:2;10937:33;;10954:1;10937:33;;;;;;;;;;;;10436:541;;:::o;17508:161::-;17611:10;:17;;;;17584:15;:24;17600:7;17584:24;;;;;;;;;;;:44;;;;17638:10;17654:7;17638:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;17638:24:4;;;;;;;;;;;;;;;;;;;;;;17508:161;:::o;43271:465:5:-;43321:27;43370:1;43364:2;:7;43360:48;;;43387:10;;;;;;;;;;;;;;;;;;;;;43360:48;43417:6;43426:2;43417:11;;43438:8;43456:66;43468:1;43463;:6;43456:66;;43485:5;;;;;;;43509:2;43504:7;;;;;;;;;43456:66;;;43531:17;43561:3;43551:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;43551:14:5;;;;43531:34;;43575:6;43590:1;43584:3;:7;43575:16;;43601:100;43614:1;43608:2;:7;43601:100;;43664:2;43659;:7;;;;;;43654:2;:12;43643:25;;43631:4;43636:3;;;;;;;43631:9;;;;;;;;;;;:37;;;;;;;;;;;43688:2;43682:8;;;;;;;;;43601:100;;;43724:4;43710:19;;;;;;43271:465;;;;:::o;39712:166::-;39790:33;39842:29;39852:2;39856;39842:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;39835:36;;39712:166;;;;:::o;686:610:3:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;1367:108:0:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1274:134:1:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;40282:1020:5:-;40414:33;40459:16;40484:2;40459:28;;40497:16;40522:2;40497:28;;40535:16;40560:2;40535:28;;40573:16;40598:2;40573:28;;40611:16;40636:2;40611:28;;40649:19;40734:3;:10;40721:3;:10;40708:3;:10;40695:3;:10;40682:3;:10;:23;:36;:49;:62;40671:74;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;40671:74:5;;;;40649:96;;40755:19;40783:5;40755:34;;40799:6;40808:1;40799:10;;40819:6;40828:1;40819:10;;40848:1;40844:5;;40839:78;40855:3;:10;40851:1;:14;40839:78;;;40900:3;40904:1;40900:6;;;;;;;;;;;;;;;;40886;40893:3;;;;;;40886:11;;;;;;;;;;;:20;;;;;;;;;;;40867:3;;;;;;;40839:78;;;40935:1;40931:5;;40926:78;40942:3;:10;40938:1;:14;40926:78;;;40987:3;40991:1;40987:6;;;;;;;;;;;;;;;;40973;40980:3;;;;;;40973:11;;;;;;;;;;;:20;;;;;;;;;;;40954:3;;;;;;;40926:78;;;41022:1;41018:5;;41013:78;41029:3;:10;41025:1;:14;41013:78;;;41074:3;41078:1;41074:6;;;;;;;;;;;;;;;;41060;41067:3;;;;;;41060:11;;;;;;;;;;;:20;;;;;;;;;;;41041:3;;;;;;;41013:78;;;41109:1;41105:5;;41100:78;41116:3;:10;41112:1;:14;41100:78;;;41161:3;41165:1;41161:6;;;;;;;;;;;;;;;;41147;41154:3;;;;;;41147:11;;;;;;;;;;;:20;;;;;;;;;;;41128:3;;;;;;;41100:78;;;41196:1;41192:5;;41187:78;41203:3;:10;41199:1;:14;41187:78;;;41248:3;41252:1;41248:6;;;;;;;;;;;;;;;;41234;41241:3;;;;;;41234:11;;;;;;;;;;;:20;;;;;;;;;;;41215:3;;;;;;;41187:78;;;41288:6;41274:21;;;;;;;;;;;40282:1020;;;;;;;:::o;1732:187:1:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;579:3522:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity >=0.4.21 <0.6.0;\n\nimport './ERC721Mintable.sol';\nimport 'openzeppelin-solidity/contracts/drafts/Counters.sol';\n\n// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>\n//import './verifier.sol';\n\ncontract SquareVerifier {\n    function verifyTx(\n            uint[2] memory a,\n            uint[2][2] memory b,\n            uint[2] memory c,\n            uint[2] memory input\n        ) public returns (bool r);\n}\n\n// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class\n\ncontract SolnSquareVerifier is JSUdacityERC721Token {\n\n    SquareVerifier private verifierContract;\n\n    \n    constructor(address verifierAddress, string memory name, string memory symbol) JSUdacityERC721Token(name, symbol) public {\n        verifierContract = SquareVerifier(verifierAddress);\n    }\n\n    // TODO define a solutions struct that can hold an index & an address => DONE\n    struct Solution {\n        uint256 index;\n        address solver;\n        bool wasMinted;\n    }\n\n\n\n    // TODO define an array of the above struct\n    // Note: in fact, we don't really need an array, keeping count of the \n    //       total number of solutions provided to increment the index is enough\n    Counters.Counter private numberOfSolutions;\n\n    // TODO define a mapping to store unique solutions submitted\n    mapping(bytes32 => Solution) private solutions;\n\n\n\n    // TODO Create an event to emit when a solution is added\n    event SolutionAdded(uint256 index, address solver);\n\n\n    // TODO Create a function to add the solutions to the array and emit the event\n    function addSolution(\n            uint[2] memory a,\n            uint[2][2] memory b,\n            uint[2] memory c,\n            uint[2] memory input\n        ) public returns (bool) {\n\n        //We generate a hash which represents this proof using the inputs\n        bytes32 solutionHash = keccak256(abi.encodePacked(input[0],input[1]));\n\n        //Check solution does not exist\n        require(solutions[solutionHash].solver==address(0), \"The solution was already added\");\n\n\n        //Check the solution is correct\n        bool isProofValid = verifierContract.verifyTx(a, b, c, input);\n        require(isProofValid, \"Provided proof is invalid\");\n\n        //We create the new solution struct, which is not yet minted\n        //We add the solution to the mapping, using its hash\n        solutions[solutionHash] = Solution(\n            numberOfSolutions.current(),\n            msg.sender,\n            false\n        );\n\n        //We emit the event\n        emit SolutionAdded(solutions[solutionHash].index, solutions[solutionHash].solver);\n\n        //We increment the counter\n        numberOfSolutions.increment();\n\n        //All went well, we return true\n        return true;\n    }\n\n\n\n    // TODO Create a function to mint new NFT only after the solution has been verified\n    //  - make sure the solution is unique (has not been used before)\n    //  - make sure you handle metadata as well as tokenSuplly\n    function mintProoved( uint256 firstInput, uint256 secondInput, address to)\n            public returns(bool) {\n\n        //We generate a hash which represents this proof using the inputs\n        bytes32 solutionHash = keccak256(abi.encodePacked(firstInput,secondInput));\n\n        Solution storage sol = solutions[solutionHash];\n\n        //We check this solution was registered\n        require(sol.solver != address(0), \"Solution was not added\");\n        //We check the solver is the current sender\n        require(sol.solver == msg.sender, \"Solution was not added by current sender\");\n        //Finally, we check that the solution has not already been used to mint\n        require(!sol.wasMinted, \"Solution already used for minting\");\n\n        //If all of the above passed successfully, we mint\n        bool result = mint(to, sol.index);\n\n        //If solution was minted properfly\n        if (result) {\n            //We save the fact that this solution has now been minted\n            sol.wasMinted = true;\n        }\n\n        return result;\n\n    }\n\n    \n}\n",
  "sourcePath": "/home/jsmaga/dev/Blockchain-Capstone/eth-contracts/contracts/SolnSquareVerifier.sol",
  "ast": {
    "absolutePath": "project:/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        8020
      ],
      "SquareVerifier": [
        7807
      ]
    },
    "id": 8021,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7781,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:6"
      },
      {
        "absolutePath": "project:/contracts/ERC721Mintable.sol",
        "file": "./ERC721Mintable.sol",
        "id": 7782,
        "nodeType": "ImportDirective",
        "scope": 8021,
        "sourceUnit": 1512,
        "src": "34:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/drafts/Counters.sol",
        "file": "openzeppelin-solidity/contracts/drafts/Counters.sol",
        "id": 7783,
        "nodeType": "ImportDirective",
        "scope": 8021,
        "sourceUnit": 49,
        "src": "65:61:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7807,
        "linearizedBaseContracts": [
          7807
        ],
        "name": "SquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7806,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "verifyTx",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7787,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7806,
                  "src": "324:16:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7784,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "324:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7786,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7785,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "329:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "324:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7793,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7806,
                  "src": "354:19:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7788,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "354:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7790,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "359:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "354:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7792,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "362:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "354:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7797,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7806,
                  "src": "387:16:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7794,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "387:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7796,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "392:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "387:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7801,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7806,
                  "src": "417:20:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7798,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "417:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7800,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "422:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "417:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "310:137:6"
            },
            "returnParameters": {
              "id": 7805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7804,
                  "name": "r",
                  "nodeType": "VariableDeclaration",
                  "scope": 7806,
                  "src": "464:6:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7803,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "464:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "463:8:6"
            },
            "scope": 7807,
            "src": "293:179:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8021,
        "src": "263:211:6"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7808,
              "name": "JSUdacityERC721Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1511,
              "src": "610:20:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JSUdacityERC721Token_$1511",
                "typeString": "contract JSUdacityERC721Token"
              }
            },
            "id": 7809,
            "nodeType": "InheritanceSpecifier",
            "src": "610:20:6"
          }
        ],
        "contractDependencies": [
          408,
          499,
          545,
          1062,
          1360,
          1470,
          1511,
          7779
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8020,
        "linearizedBaseContracts": [
          8020,
          1511,
          1470,
          7779,
          1360,
          1062,
          545,
          499,
          408
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7811,
            "name": "verifierContract",
            "nodeType": "VariableDeclaration",
            "scope": 8020,
            "src": "638:39:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_SquareVerifier_$7807",
              "typeString": "contract SquareVerifier"
            },
            "typeName": {
              "contractScope": null,
              "id": 7810,
              "name": "SquareVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7807,
              "src": "638:14:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SquareVerifier_$7807",
                "typeString": "contract SquareVerifier"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 7830,
              "nodeType": "Block",
              "src": "810:67:6",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7824,
                      "name": "verifierContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7811,
                      "src": "820:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_SquareVerifier_$7807",
                        "typeString": "contract SquareVerifier"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 7826,
                          "name": "verifierAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7813,
                          "src": "854:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 7825,
                        "name": "SquareVerifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7807,
                        "src": "839:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SquareVerifier_$7807_$",
                          "typeString": "type(contract SquareVerifier)"
                        }
                      },
                      "id": 7827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "839:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_SquareVerifier_$7807",
                        "typeString": "contract SquareVerifier"
                      }
                    },
                    "src": "820:50:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_SquareVerifier_$7807",
                      "typeString": "contract SquareVerifier"
                    }
                  },
                  "id": 7829,
                  "nodeType": "ExpressionStatement",
                  "src": "820:50:6"
                }
              ]
            },
            "documentation": null,
            "id": 7831,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7820,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7815,
                    "src": "789:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7821,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7817,
                    "src": "795:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7822,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7819,
                  "name": "JSUdacityERC721Token",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1511,
                  "src": "768:20:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_JSUdacityERC721Token_$1511_$",
                    "typeString": "type(contract JSUdacityERC721Token)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "768:34:6"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7813,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7831,
                  "src": "701:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "701:7:6",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7815,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 7831,
                  "src": "726:18:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7814,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7817,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7831,
                  "src": "746:20:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7816,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "746:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "700:67:6"
            },
            "returnParameters": {
              "id": 7823,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:6"
            },
            "scope": 8020,
            "src": "689:188:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7838,
            "members": [
              {
                "constant": false,
                "id": 7833,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7838,
                "src": "991:13:6",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7832,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "991:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7835,
                "name": "solver",
                "nodeType": "VariableDeclaration",
                "scope": 7838,
                "src": "1014:14:6",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7834,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1014:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7837,
                "name": "wasMinted",
                "nodeType": "VariableDeclaration",
                "scope": 7838,
                "src": "1038:14:6",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 7836,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1038:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Solution",
            "nodeType": "StructDefinition",
            "scope": 8020,
            "src": "965:94:6",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7840,
            "name": "numberOfSolutions",
            "nodeType": "VariableDeclaration",
            "scope": 8020,
            "src": "1271:42:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$8_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 7839,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8,
              "src": "1271:16:6",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$8_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7844,
            "name": "solutions",
            "nodeType": "VariableDeclaration",
            "scope": 8020,
            "src": "1385:46:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7843,
              "keyType": {
                "id": 7841,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1393:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1385:28:6",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7842,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7838,
                "src": "1404:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7850,
            "name": "SolutionAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7846,
                  "indexed": false,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 7850,
                  "src": "1521:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1521:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7848,
                  "indexed": false,
                  "name": "solver",
                  "nodeType": "VariableDeclaration",
                  "scope": 7850,
                  "src": "1536:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:6",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1520:31:6"
            },
            "src": "1501:51:6"
          },
          {
            "body": {
              "id": 7945,
              "nodeType": "Block",
              "src": "1822:996:6",
              "statements": [
                {
                  "assignments": [
                    7874
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7874,
                      "name": "solutionHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 7945,
                      "src": "1907:20:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7873,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1907:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7886,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7878,
                              "name": "input",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7868,
                              "src": "1957:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                "typeString": "uint256[2] memory"
                              }
                            },
                            "id": 7880,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 7879,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1963:1:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1957:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7881,
                              "name": "input",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7868,
                              "src": "1966:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                "typeString": "uint256[2] memory"
                              }
                            },
                            "id": 7883,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 7882,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1972:1:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1966:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7876,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8022,
                            "src": "1940:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7877,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1940:16:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1940:35:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7875,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8029,
                      "src": "1930:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1930:46:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1907:69:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 7895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7888,
                              "name": "solutions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7844,
                              "src": "2035:9:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7890,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7889,
                              "name": "solutionHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7874,
                              "src": "2045:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2035:23:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7838_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7891,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "solver",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7835,
                          "src": "2035:30:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 7893,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2075:1:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 7892,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2067:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 7894,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2067:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2035:42:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54686520736f6c7574696f6e2077617320616c7265616479206164646564",
                        "id": 7896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2079:32:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_18c746505d03af8060a7f6d7f7006f64054dbd3053236404d083c7f28d2db2c3",
                          "typeString": "literal_string \"The solution was already added\""
                        },
                        "value": "The solution was already added"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_18c746505d03af8060a7f6d7f7006f64054dbd3053236404d083c7f28d2db2c3",
                          "typeString": "literal_string \"The solution was already added\""
                        }
                      ],
                      "id": 7887,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8038,
                        8039
                      ],
                      "referencedDeclaration": 8039,
                      "src": "2027:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2027:85:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7898,
                  "nodeType": "ExpressionStatement",
                  "src": "2027:85:6"
                },
                {
                  "assignments": [
                    7900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7900,
                      "name": "isProofValid",
                      "nodeType": "VariableDeclaration",
                      "scope": 7945,
                      "src": "2164:17:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 7899,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2164:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7908,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7903,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7854,
                        "src": "2210:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7904,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7860,
                        "src": "2213:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7905,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7864,
                        "src": "2216:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7906,
                        "name": "input",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7868,
                        "src": "2219:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7901,
                        "name": "verifierContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7811,
                        "src": "2184:16:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_SquareVerifier_$7807",
                          "typeString": "contract SquareVerifier"
                        }
                      },
                      "id": 7902,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7806,
                      "src": "2184:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) external returns (bool)"
                      }
                    },
                    "id": 7907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2184:41:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2164:61:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7910,
                        "name": "isProofValid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7900,
                        "src": "2243:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "50726f76696465642070726f6f6620697320696e76616c6964",
                        "id": 7911,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2257:27:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3a20f173ca076e889ce31ebf4d793092884066a1f5877141985b7572f4d6dd23",
                          "typeString": "literal_string \"Provided proof is invalid\""
                        },
                        "value": "Provided proof is invalid"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3a20f173ca076e889ce31ebf4d793092884066a1f5877141985b7572f4d6dd23",
                          "typeString": "literal_string \"Provided proof is invalid\""
                        }
                      ],
                      "id": 7909,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8038,
                        8039
                      ],
                      "referencedDeclaration": 8039,
                      "src": "2235:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2235:50:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7913,
                  "nodeType": "ExpressionStatement",
                  "src": "2235:50:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7914,
                        "name": "solutions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7844,
                        "src": "2426:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                          "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                        }
                      },
                      "id": 7916,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7915,
                        "name": "solutionHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7874,
                        "src": "2436:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2426:23:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7838_storage",
                        "typeString": "struct SolnSquareVerifier.Solution storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 7918,
                              "name": "numberOfSolutions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7840,
                              "src": "2474:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$8_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 7919,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19,
                            "src": "2474:25:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$8_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$8_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 7920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2474:27:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 7921,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8035,
                            "src": "2515:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 7922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2515:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 7923,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2539:5:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 7917,
                        "name": "Solution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7838,
                        "src": "2452:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Solution_$7838_storage_ptr_$",
                          "typeString": "type(struct SolnSquareVerifier.Solution storage pointer)"
                        }
                      },
                      "id": 7924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2452:102:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7838_memory",
                        "typeString": "struct SolnSquareVerifier.Solution memory"
                      }
                    },
                    "src": "2426:128:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7838_storage",
                      "typeString": "struct SolnSquareVerifier.Solution storage ref"
                    }
                  },
                  "id": 7926,
                  "nodeType": "ExpressionStatement",
                  "src": "2426:128:6"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7928,
                            "name": "solutions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7844,
                            "src": "2612:9:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7930,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7929,
                            "name": "solutionHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7874,
                            "src": "2622:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2612:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7838_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7931,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7833,
                        "src": "2612:29:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7932,
                            "name": "solutions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7844,
                            "src": "2643:9:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7934,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7933,
                            "name": "solutionHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7874,
                            "src": "2653:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2643:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7838_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7935,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "solver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7835,
                        "src": "2643:30:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7927,
                      "name": "SolutionAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7850,
                      "src": "2598:13:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 7936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2598:76:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7937,
                  "nodeType": "EmitStatement",
                  "src": "2593:81:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7938,
                        "name": "numberOfSolutions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7840,
                        "src": "2720:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$8_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 7940,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31,
                      "src": "2720:27:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$8_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$8_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 7941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2720:29:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7942,
                  "nodeType": "ExpressionStatement",
                  "src": "2720:29:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 7943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2807:4:6",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 7872,
                  "id": 7944,
                  "nodeType": "Return",
                  "src": "2800:11:6"
                }
              ]
            },
            "documentation": null,
            "id": 7946,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7854,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7946,
                  "src": "1676:16:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7851,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1676:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7853,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1681:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1676:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7860,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7946,
                  "src": "1706:19:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7855,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1706:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7857,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1711:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1706:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7859,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1714:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1706:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7864,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7946,
                  "src": "1739:16:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7861,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1739:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7863,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1744:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1739:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7868,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7946,
                  "src": "1769:20:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7865,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1769:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7867,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1774:1:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1769:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1662:137:6"
            },
            "returnParameters": {
              "id": 7872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7871,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7946,
                  "src": "1816:4:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7870,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1816:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1815:6:6"
            },
            "scope": 8020,
            "src": "1642:1176:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8018,
              "nodeType": "Block",
              "src": "3155:938:6",
              "statements": [
                {
                  "assignments": [
                    7958
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7958,
                      "name": "solutionHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 8018,
                      "src": "3240:20:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7957,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3240:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7966,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7962,
                            "name": "firstInput",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7948,
                            "src": "3290:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7963,
                            "name": "secondInput",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7950,
                            "src": "3301:11:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7960,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8022,
                            "src": "3273:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7961,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3273:16:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3273:40:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7959,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8029,
                      "src": "3263:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3263:51:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3240:74:6"
                },
                {
                  "assignments": [
                    7968
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7968,
                      "name": "sol",
                      "nodeType": "VariableDeclaration",
                      "scope": 8018,
                      "src": "3325:20:6",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                        "typeString": "struct SolnSquareVerifier.Solution"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 7967,
                        "name": "Solution",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7838,
                        "src": "3325:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7972,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7969,
                      "name": "solutions",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7844,
                      "src": "3348:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7838_storage_$",
                        "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                      }
                    },
                    "id": 7971,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7970,
                      "name": "solutionHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7958,
                      "src": "3358:12:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3348:23:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7838_storage",
                      "typeString": "struct SolnSquareVerifier.Solution storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3325:46:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 7979,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 7974,
                            "name": "sol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7968,
                            "src": "3438:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                              "typeString": "struct SolnSquareVerifier.Solution storage pointer"
                            }
                          },
                          "id": 7975,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "solver",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7835,
                          "src": "3438:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 7977,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3460:1:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 7976,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3452:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 7978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3452:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "3438:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20776173206e6f74206164646564",
                        "id": 7980,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3464:24:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a9422431398bab33f5dffa7c8b121b22aa3461358d1dad4ffe95a64088d3f437",
                          "typeString": "literal_string \"Solution was not added\""
                        },
                        "value": "Solution was not added"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a9422431398bab33f5dffa7c8b121b22aa3461358d1dad4ffe95a64088d3f437",
                          "typeString": "literal_string \"Solution was not added\""
                        }
                      ],
                      "id": 7973,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8038,
                        8039
                      ],
                      "referencedDeclaration": 8039,
                      "src": "3430:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3430:59:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7982,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:59:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 7988,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 7984,
                            "name": "sol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7968,
                            "src": "3559:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                              "typeString": "struct SolnSquareVerifier.Solution storage pointer"
                            }
                          },
                          "id": 7985,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "solver",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7835,
                          "src": "3559:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 7986,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8035,
                            "src": "3573:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 7987,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3573:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "3559:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20776173206e6f742061646465642062792063757272656e742073656e646572",
                        "id": 7989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3585:42:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b832394531252a0d75bc8e6df91e1887698a9a5d66004c5049479987a2a723a1",
                          "typeString": "literal_string \"Solution was not added by current sender\""
                        },
                        "value": "Solution was not added by current sender"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b832394531252a0d75bc8e6df91e1887698a9a5d66004c5049479987a2a723a1",
                          "typeString": "literal_string \"Solution was not added by current sender\""
                        }
                      ],
                      "id": 7983,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8038,
                        8039
                      ],
                      "referencedDeclaration": 8039,
                      "src": "3551:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3551:77:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7991,
                  "nodeType": "ExpressionStatement",
                  "src": "3551:77:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "3726:14:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 7993,
                            "name": "sol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7968,
                            "src": "3727:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                              "typeString": "struct SolnSquareVerifier.Solution storage pointer"
                            }
                          },
                          "id": 7994,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "wasMinted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7837,
                          "src": "3727:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20616c7265616479207573656420666f72206d696e74696e67",
                        "id": 7996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3742:35:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_32528b7f22663c04443e2d49d2163bb7ee22788f1d70fb1c9eb5e0de6206b6da",
                          "typeString": "literal_string \"Solution already used for minting\""
                        },
                        "value": "Solution already used for minting"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_32528b7f22663c04443e2d49d2163bb7ee22788f1d70fb1c9eb5e0de6206b6da",
                          "typeString": "literal_string \"Solution already used for minting\""
                        }
                      ],
                      "id": 7992,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8038,
                        8039
                      ],
                      "referencedDeclaration": 8039,
                      "src": "3718:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3718:60:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7998,
                  "nodeType": "ExpressionStatement",
                  "src": "3718:60:6"
                },
                {
                  "assignments": [
                    8000
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8000,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 8018,
                      "src": "3848:11:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 7999,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3848:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8006,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8002,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7952,
                        "src": "3867:2:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8003,
                          "name": "sol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7968,
                          "src": "3871:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                            "typeString": "struct SolnSquareVerifier.Solution storage pointer"
                          }
                        },
                        "id": 8004,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7833,
                        "src": "3871:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 8001,
                      "name": "mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1510,
                      "src": "3862:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 8005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3862:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3848:33:6"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 8007,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8000,
                    "src": "3939:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 8015,
                  "nodeType": "IfStatement",
                  "src": "3935:127:6",
                  "trueBody": {
                    "id": 8014,
                    "nodeType": "Block",
                    "src": "3947:115:6",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 8012,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 8008,
                              "name": "sol",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7968,
                              "src": "4031:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Solution_$7838_storage_ptr",
                                "typeString": "struct SolnSquareVerifier.Solution storage pointer"
                              }
                            },
                            "id": 8010,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "wasMinted",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7837,
                            "src": "4031:13:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 8011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4047:4:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "4031:20:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8013,
                        "nodeType": "ExpressionStatement",
                        "src": "4031:20:6"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8016,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8000,
                    "src": "4079:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7956,
                  "id": 8017,
                  "nodeType": "Return",
                  "src": "4072:13:6"
                }
              ]
            },
            "documentation": null,
            "id": 8019,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintProoved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7948,
                  "name": "firstInput",
                  "nodeType": "VariableDeclaration",
                  "scope": 8019,
                  "src": "3069:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3069:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7950,
                  "name": "secondInput",
                  "nodeType": "VariableDeclaration",
                  "scope": 8019,
                  "src": "3089:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3089:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7952,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8019,
                  "src": "3110:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3110:7:6",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3067:54:6"
            },
            "returnParameters": {
              "id": 7956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7955,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8019,
                  "src": "3149:4:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7954,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3149:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3148:6:6"
            },
            "scope": 8020,
            "src": "3047:1046:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8021,
        "src": "579:3522:6"
      }
    ],
    "src": "0:4102:6"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/SolnSquareVerifier.sol",
      "exportedSymbols": {
        "SolnSquareVerifier": [
          8020
        ],
        "SquareVerifier": [
          7807
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".21",
            "<",
            "0.6",
            ".0"
          ]
        },
        "id": 7781,
        "name": "PragmaDirective",
        "src": "0:32:6"
      },
      {
        "attributes": {
          "SourceUnit": 1512,
          "absolutePath": "project:/contracts/ERC721Mintable.sol",
          "file": "./ERC721Mintable.sol",
          "scope": 8021,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7782,
        "name": "ImportDirective",
        "src": "34:30:6"
      },
      {
        "attributes": {
          "SourceUnit": 49,
          "absolutePath": "openzeppelin-solidity/contracts/drafts/Counters.sol",
          "file": "openzeppelin-solidity/contracts/drafts/Counters.sol",
          "scope": 8021,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7783,
        "name": "ImportDirective",
        "src": "65:61:6"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            7807
          ],
          "name": "SquareVerifier",
          "scope": 8021
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "verifyTx",
              "scope": 7807,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7806,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7784,
                            "name": "ElementaryTypeName",
                            "src": "324:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7785,
                            "name": "Literal",
                            "src": "329:1:6"
                          }
                        ],
                        "id": 7786,
                        "name": "ArrayTypeName",
                        "src": "324:7:6"
                      }
                    ],
                    "id": 7787,
                    "name": "VariableDeclaration",
                    "src": "324:16:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7806,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7788,
                                "name": "ElementaryTypeName",
                                "src": "354:4:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7789,
                                "name": "Literal",
                                "src": "359:1:6"
                              }
                            ],
                            "id": 7790,
                            "name": "ArrayTypeName",
                            "src": "354:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7791,
                            "name": "Literal",
                            "src": "362:1:6"
                          }
                        ],
                        "id": 7792,
                        "name": "ArrayTypeName",
                        "src": "354:10:6"
                      }
                    ],
                    "id": 7793,
                    "name": "VariableDeclaration",
                    "src": "354:19:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 7806,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7794,
                            "name": "ElementaryTypeName",
                            "src": "387:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7795,
                            "name": "Literal",
                            "src": "392:1:6"
                          }
                        ],
                        "id": 7796,
                        "name": "ArrayTypeName",
                        "src": "387:7:6"
                      }
                    ],
                    "id": 7797,
                    "name": "VariableDeclaration",
                    "src": "387:16:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 7806,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7798,
                            "name": "ElementaryTypeName",
                            "src": "417:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7799,
                            "name": "Literal",
                            "src": "422:1:6"
                          }
                        ],
                        "id": 7800,
                        "name": "ArrayTypeName",
                        "src": "417:7:6"
                      }
                    ],
                    "id": 7801,
                    "name": "VariableDeclaration",
                    "src": "417:20:6"
                  }
                ],
                "id": 7802,
                "name": "ParameterList",
                "src": "310:137:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "r",
                      "scope": 7806,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 7803,
                        "name": "ElementaryTypeName",
                        "src": "464:4:6"
                      }
                    ],
                    "id": 7804,
                    "name": "VariableDeclaration",
                    "src": "464:6:6"
                  }
                ],
                "id": 7805,
                "name": "ParameterList",
                "src": "463:8:6"
              }
            ],
            "id": 7806,
            "name": "FunctionDefinition",
            "src": "293:179:6"
          }
        ],
        "id": 7807,
        "name": "ContractDefinition",
        "src": "263:211:6"
      },
      {
        "attributes": {
          "contractDependencies": [
            408,
            499,
            545,
            1062,
            1360,
            1470,
            1511,
            7779
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8020,
            1511,
            1470,
            7779,
            1360,
            1062,
            545,
            499,
            408
          ],
          "name": "SolnSquareVerifier",
          "scope": 8021
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "JSUdacityERC721Token",
                  "referencedDeclaration": 1511,
                  "type": "contract JSUdacityERC721Token"
                },
                "id": 7808,
                "name": "UserDefinedTypeName",
                "src": "610:20:6"
              }
            ],
            "id": 7809,
            "name": "InheritanceSpecifier",
            "src": "610:20:6"
          },
          {
            "attributes": {
              "constant": false,
              "name": "verifierContract",
              "scope": 8020,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract SquareVerifier",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SquareVerifier",
                  "referencedDeclaration": 7807,
                  "type": "contract SquareVerifier"
                },
                "id": 7810,
                "name": "UserDefinedTypeName",
                "src": "638:14:6"
              }
            ],
            "id": 7811,
            "name": "VariableDeclaration",
            "src": "638:39:6"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "scope": 8020,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "verifierAddress",
                      "scope": 7831,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7812,
                        "name": "ElementaryTypeName",
                        "src": "701:7:6"
                      }
                    ],
                    "id": 7813,
                    "name": "VariableDeclaration",
                    "src": "701:23:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "name",
                      "scope": 7831,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 7814,
                        "name": "ElementaryTypeName",
                        "src": "726:6:6"
                      }
                    ],
                    "id": 7815,
                    "name": "VariableDeclaration",
                    "src": "726:18:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 7831,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 7816,
                        "name": "ElementaryTypeName",
                        "src": "746:6:6"
                      }
                    ],
                    "id": 7817,
                    "name": "VariableDeclaration",
                    "src": "746:20:6"
                  }
                ],
                "id": 7818,
                "name": "ParameterList",
                "src": "700:67:6"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7823,
                "name": "ParameterList",
                "src": "810:0:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1511,
                      "type": "type(contract JSUdacityERC721Token)",
                      "value": "JSUdacityERC721Token"
                    },
                    "id": 7819,
                    "name": "Identifier",
                    "src": "768:20:6"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7815,
                      "type": "string memory",
                      "value": "name"
                    },
                    "id": 7820,
                    "name": "Identifier",
                    "src": "789:4:6"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7817,
                      "type": "string memory",
                      "value": "symbol"
                    },
                    "id": 7821,
                    "name": "Identifier",
                    "src": "795:6:6"
                  }
                ],
                "id": 7822,
                "name": "ModifierInvocation",
                "src": "768:34:6"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract SquareVerifier"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7811,
                              "type": "contract SquareVerifier",
                              "value": "verifierContract"
                            },
                            "id": 7824,
                            "name": "Identifier",
                            "src": "820:16:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract SquareVerifier",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7807,
                                  "type": "type(contract SquareVerifier)",
                                  "value": "SquareVerifier"
                                },
                                "id": 7825,
                                "name": "Identifier",
                                "src": "839:14:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7813,
                                  "type": "address",
                                  "value": "verifierAddress"
                                },
                                "id": 7826,
                                "name": "Identifier",
                                "src": "854:15:6"
                              }
                            ],
                            "id": 7827,
                            "name": "FunctionCall",
                            "src": "839:31:6"
                          }
                        ],
                        "id": 7828,
                        "name": "Assignment",
                        "src": "820:50:6"
                      }
                    ],
                    "id": 7829,
                    "name": "ExpressionStatement",
                    "src": "820:50:6"
                  }
                ],
                "id": 7830,
                "name": "Block",
                "src": "810:67:6"
              }
            ],
            "id": 7831,
            "name": "FunctionDefinition",
            "src": "689:188:6"
          },
          {
            "attributes": {
              "canonicalName": "SolnSquareVerifier.Solution",
              "name": "Solution",
              "scope": 8020,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "index",
                  "scope": 7838,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 7832,
                    "name": "ElementaryTypeName",
                    "src": "991:7:6"
                  }
                ],
                "id": 7833,
                "name": "VariableDeclaration",
                "src": "991:13:6"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "solver",
                  "scope": 7838,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 7834,
                    "name": "ElementaryTypeName",
                    "src": "1014:7:6"
                  }
                ],
                "id": 7835,
                "name": "VariableDeclaration",
                "src": "1014:14:6"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "wasMinted",
                  "scope": 7838,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 7836,
                    "name": "ElementaryTypeName",
                    "src": "1038:4:6"
                  }
                ],
                "id": 7837,
                "name": "VariableDeclaration",
                "src": "1038:14:6"
              }
            ],
            "id": 7838,
            "name": "StructDefinition",
            "src": "965:94:6"
          },
          {
            "attributes": {
              "constant": false,
              "name": "numberOfSolutions",
              "scope": 8020,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct Counters.Counter",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Counters.Counter",
                  "referencedDeclaration": 8,
                  "type": "struct Counters.Counter"
                },
                "id": 7839,
                "name": "UserDefinedTypeName",
                "src": "1271:16:6"
              }
            ],
            "id": 7840,
            "name": "VariableDeclaration",
            "src": "1271:42:6"
          },
          {
            "attributes": {
              "constant": false,
              "name": "solutions",
              "scope": 8020,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 7841,
                    "name": "ElementaryTypeName",
                    "src": "1393:7:6"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Solution",
                      "referencedDeclaration": 7838,
                      "type": "struct SolnSquareVerifier.Solution"
                    },
                    "id": 7842,
                    "name": "UserDefinedTypeName",
                    "src": "1404:8:6"
                  }
                ],
                "id": 7843,
                "name": "Mapping",
                "src": "1385:28:6"
              }
            ],
            "id": 7844,
            "name": "VariableDeclaration",
            "src": "1385:46:6"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "SolutionAdded"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "index",
                      "scope": 7850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7845,
                        "name": "ElementaryTypeName",
                        "src": "1521:7:6"
                      }
                    ],
                    "id": 7846,
                    "name": "VariableDeclaration",
                    "src": "1521:13:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "solver",
                      "scope": 7850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7847,
                        "name": "ElementaryTypeName",
                        "src": "1536:7:6"
                      }
                    ],
                    "id": 7848,
                    "name": "VariableDeclaration",
                    "src": "1536:14:6"
                  }
                ],
                "id": 7849,
                "name": "ParameterList",
                "src": "1520:31:6"
              }
            ],
            "id": 7850,
            "name": "EventDefinition",
            "src": "1501:51:6"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "addSolution",
              "scope": 8020,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7946,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7851,
                            "name": "ElementaryTypeName",
                            "src": "1676:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7852,
                            "name": "Literal",
                            "src": "1681:1:6"
                          }
                        ],
                        "id": 7853,
                        "name": "ArrayTypeName",
                        "src": "1676:7:6"
                      }
                    ],
                    "id": 7854,
                    "name": "VariableDeclaration",
                    "src": "1676:16:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7946,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7855,
                                "name": "ElementaryTypeName",
                                "src": "1706:4:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7856,
                                "name": "Literal",
                                "src": "1711:1:6"
                              }
                            ],
                            "id": 7857,
                            "name": "ArrayTypeName",
                            "src": "1706:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7858,
                            "name": "Literal",
                            "src": "1714:1:6"
                          }
                        ],
                        "id": 7859,
                        "name": "ArrayTypeName",
                        "src": "1706:10:6"
                      }
                    ],
                    "id": 7860,
                    "name": "VariableDeclaration",
                    "src": "1706:19:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 7946,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7861,
                            "name": "ElementaryTypeName",
                            "src": "1739:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7862,
                            "name": "Literal",
                            "src": "1744:1:6"
                          }
                        ],
                        "id": 7863,
                        "name": "ArrayTypeName",
                        "src": "1739:7:6"
                      }
                    ],
                    "id": 7864,
                    "name": "VariableDeclaration",
                    "src": "1739:16:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 7946,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7865,
                            "name": "ElementaryTypeName",
                            "src": "1769:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7866,
                            "name": "Literal",
                            "src": "1774:1:6"
                          }
                        ],
                        "id": 7867,
                        "name": "ArrayTypeName",
                        "src": "1769:7:6"
                      }
                    ],
                    "id": 7868,
                    "name": "VariableDeclaration",
                    "src": "1769:20:6"
                  }
                ],
                "id": 7869,
                "name": "ParameterList",
                "src": "1662:137:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7946,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 7870,
                        "name": "ElementaryTypeName",
                        "src": "1816:4:6"
                      }
                    ],
                    "id": 7871,
                    "name": "VariableDeclaration",
                    "src": "1816:4:6"
                  }
                ],
                "id": 7872,
                "name": "ParameterList",
                "src": "1815:6:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7874
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "solutionHash",
                          "scope": 7945,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 7873,
                            "name": "ElementaryTypeName",
                            "src": "1907:7:6"
                          }
                        ],
                        "id": 7874,
                        "name": "VariableDeclaration",
                        "src": "1907:20:6"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8029,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 7875,
                            "name": "Identifier",
                            "src": "1930:9:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8022,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 7876,
                                    "name": "Identifier",
                                    "src": "1940:3:6"
                                  }
                                ],
                                "id": 7877,
                                "name": "MemberAccess",
                                "src": "1940:16:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7868,
                                      "type": "uint256[2] memory",
                                      "value": "input"
                                    },
                                    "id": 7878,
                                    "name": "Identifier",
                                    "src": "1957:5:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 7879,
                                    "name": "Literal",
                                    "src": "1963:1:6"
                                  }
                                ],
                                "id": 7880,
                                "name": "IndexAccess",
                                "src": "1957:8:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7868,
                                      "type": "uint256[2] memory",
                                      "value": "input"
                                    },
                                    "id": 7881,
                                    "name": "Identifier",
                                    "src": "1966:5:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "31",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 1",
                                      "value": "1"
                                    },
                                    "id": 7882,
                                    "name": "Literal",
                                    "src": "1972:1:6"
                                  }
                                ],
                                "id": 7883,
                                "name": "IndexAccess",
                                "src": "1966:8:6"
                              }
                            ],
                            "id": 7884,
                            "name": "FunctionCall",
                            "src": "1940:35:6"
                          }
                        ],
                        "id": 7885,
                        "name": "FunctionCall",
                        "src": "1930:46:6"
                      }
                    ],
                    "id": 7886,
                    "name": "VariableDeclarationStatement",
                    "src": "1907:69:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_18c746505d03af8060a7f6d7f7006f64054dbd3053236404d083c7f28d2db2c3",
                                  "typeString": "literal_string \"The solution was already added\""
                                }
                              ],
                              "overloadedDeclarations": [
                                8038,
                                8039
                              ],
                              "referencedDeclaration": 8039,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7887,
                            "name": "Identifier",
                            "src": "2027:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "solver",
                                  "referencedDeclaration": 7835,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct SolnSquareVerifier.Solution storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7844,
                                          "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                          "value": "solutions"
                                        },
                                        "id": 7888,
                                        "name": "Identifier",
                                        "src": "2035:9:6"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7874,
                                          "type": "bytes32",
                                          "value": "solutionHash"
                                        },
                                        "id": 7889,
                                        "name": "Identifier",
                                        "src": "2045:12:6"
                                      }
                                    ],
                                    "id": 7890,
                                    "name": "IndexAccess",
                                    "src": "2035:23:6"
                                  }
                                ],
                                "id": 7891,
                                "name": "MemberAccess",
                                "src": "2035:30:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 7892,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2067:7:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 7893,
                                    "name": "Literal",
                                    "src": "2075:1:6"
                                  }
                                ],
                                "id": 7894,
                                "name": "FunctionCall",
                                "src": "2067:10:6"
                              }
                            ],
                            "id": 7895,
                            "name": "BinaryOperation",
                            "src": "2035:42:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "54686520736f6c7574696f6e2077617320616c7265616479206164646564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"The solution was already added\"",
                              "value": "The solution was already added"
                            },
                            "id": 7896,
                            "name": "Literal",
                            "src": "2079:32:6"
                          }
                        ],
                        "id": 7897,
                        "name": "FunctionCall",
                        "src": "2027:85:6"
                      }
                    ],
                    "id": 7898,
                    "name": "ExpressionStatement",
                    "src": "2027:85:6"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7900
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "isProofValid",
                          "scope": 7945,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 7899,
                            "name": "ElementaryTypeName",
                            "src": "2164:4:6"
                          }
                        ],
                        "id": 7900,
                        "name": "VariableDeclaration",
                        "src": "2164:17:6"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                                  "typeString": "uint256[2] memory[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "verifyTx",
                              "referencedDeclaration": 7806,
                              "type": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7811,
                                  "type": "contract SquareVerifier",
                                  "value": "verifierContract"
                                },
                                "id": 7901,
                                "name": "Identifier",
                                "src": "2184:16:6"
                              }
                            ],
                            "id": 7902,
                            "name": "MemberAccess",
                            "src": "2184:25:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7854,
                              "type": "uint256[2] memory",
                              "value": "a"
                            },
                            "id": 7903,
                            "name": "Identifier",
                            "src": "2210:1:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7860,
                              "type": "uint256[2] memory[2] memory",
                              "value": "b"
                            },
                            "id": 7904,
                            "name": "Identifier",
                            "src": "2213:1:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7864,
                              "type": "uint256[2] memory",
                              "value": "c"
                            },
                            "id": 7905,
                            "name": "Identifier",
                            "src": "2216:1:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7868,
                              "type": "uint256[2] memory",
                              "value": "input"
                            },
                            "id": 7906,
                            "name": "Identifier",
                            "src": "2219:5:6"
                          }
                        ],
                        "id": 7907,
                        "name": "FunctionCall",
                        "src": "2184:41:6"
                      }
                    ],
                    "id": 7908,
                    "name": "VariableDeclarationStatement",
                    "src": "2164:61:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_3a20f173ca076e889ce31ebf4d793092884066a1f5877141985b7572f4d6dd23",
                                  "typeString": "literal_string \"Provided proof is invalid\""
                                }
                              ],
                              "overloadedDeclarations": [
                                8038,
                                8039
                              ],
                              "referencedDeclaration": 8039,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7909,
                            "name": "Identifier",
                            "src": "2235:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7900,
                              "type": "bool",
                              "value": "isProofValid"
                            },
                            "id": 7910,
                            "name": "Identifier",
                            "src": "2243:12:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "50726f76696465642070726f6f6620697320696e76616c6964",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Provided proof is invalid\"",
                              "value": "Provided proof is invalid"
                            },
                            "id": 7911,
                            "name": "Literal",
                            "src": "2257:27:6"
                          }
                        ],
                        "id": 7912,
                        "name": "FunctionCall",
                        "src": "2235:50:6"
                      }
                    ],
                    "id": 7913,
                    "name": "ExpressionStatement",
                    "src": "2235:50:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct SolnSquareVerifier.Solution storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct SolnSquareVerifier.Solution storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7844,
                                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                  "value": "solutions"
                                },
                                "id": 7914,
                                "name": "Identifier",
                                "src": "2426:9:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7874,
                                  "type": "bytes32",
                                  "value": "solutionHash"
                                },
                                "id": 7915,
                                "name": "Identifier",
                                "src": "2436:12:6"
                              }
                            ],
                            "id": 7916,
                            "name": "IndexAccess",
                            "src": "2426:23:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct SolnSquareVerifier.Solution memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    },
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7838,
                                  "type": "type(struct SolnSquareVerifier.Solution storage pointer)",
                                  "value": "Solution"
                                },
                                "id": 7917,
                                "name": "Identifier",
                                "src": "2452:8:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "current",
                                      "referencedDeclaration": 19,
                                      "type": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7840,
                                          "type": "struct Counters.Counter storage ref",
                                          "value": "numberOfSolutions"
                                        },
                                        "id": 7918,
                                        "name": "Identifier",
                                        "src": "2474:17:6"
                                      }
                                    ],
                                    "id": 7919,
                                    "name": "MemberAccess",
                                    "src": "2474:25:6"
                                  }
                                ],
                                "id": 7920,
                                "name": "FunctionCall",
                                "src": "2474:27:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8035,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7921,
                                    "name": "Identifier",
                                    "src": "2515:3:6"
                                  }
                                ],
                                "id": 7922,
                                "name": "MemberAccess",
                                "src": "2515:10:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 7923,
                                "name": "Literal",
                                "src": "2539:5:6"
                              }
                            ],
                            "id": 7924,
                            "name": "FunctionCall",
                            "src": "2452:102:6"
                          }
                        ],
                        "id": 7925,
                        "name": "Assignment",
                        "src": "2426:128:6"
                      }
                    ],
                    "id": 7926,
                    "name": "ExpressionStatement",
                    "src": "2426:128:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7850,
                              "type": "function (uint256,address)",
                              "value": "SolutionAdded"
                            },
                            "id": 7927,
                            "name": "Identifier",
                            "src": "2598:13:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "index",
                              "referencedDeclaration": 7833,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct SolnSquareVerifier.Solution storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7844,
                                      "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                      "value": "solutions"
                                    },
                                    "id": 7928,
                                    "name": "Identifier",
                                    "src": "2612:9:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7874,
                                      "type": "bytes32",
                                      "value": "solutionHash"
                                    },
                                    "id": 7929,
                                    "name": "Identifier",
                                    "src": "2622:12:6"
                                  }
                                ],
                                "id": 7930,
                                "name": "IndexAccess",
                                "src": "2612:23:6"
                              }
                            ],
                            "id": 7931,
                            "name": "MemberAccess",
                            "src": "2612:29:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "solver",
                              "referencedDeclaration": 7835,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct SolnSquareVerifier.Solution storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7844,
                                      "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                      "value": "solutions"
                                    },
                                    "id": 7932,
                                    "name": "Identifier",
                                    "src": "2643:9:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7874,
                                      "type": "bytes32",
                                      "value": "solutionHash"
                                    },
                                    "id": 7933,
                                    "name": "Identifier",
                                    "src": "2653:12:6"
                                  }
                                ],
                                "id": 7934,
                                "name": "IndexAccess",
                                "src": "2643:23:6"
                              }
                            ],
                            "id": 7935,
                            "name": "MemberAccess",
                            "src": "2643:30:6"
                          }
                        ],
                        "id": 7936,
                        "name": "FunctionCall",
                        "src": "2598:76:6"
                      }
                    ],
                    "id": 7937,
                    "name": "EmitStatement",
                    "src": "2593:81:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "increment",
                              "referencedDeclaration": 31,
                              "type": "function (struct Counters.Counter storage pointer)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7840,
                                  "type": "struct Counters.Counter storage ref",
                                  "value": "numberOfSolutions"
                                },
                                "id": 7938,
                                "name": "Identifier",
                                "src": "2720:17:6"
                              }
                            ],
                            "id": 7940,
                            "name": "MemberAccess",
                            "src": "2720:27:6"
                          }
                        ],
                        "id": 7941,
                        "name": "FunctionCall",
                        "src": "2720:29:6"
                      }
                    ],
                    "id": 7942,
                    "name": "ExpressionStatement",
                    "src": "2720:29:6"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7872
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 7943,
                        "name": "Literal",
                        "src": "2807:4:6"
                      }
                    ],
                    "id": 7944,
                    "name": "Return",
                    "src": "2800:11:6"
                  }
                ],
                "id": 7945,
                "name": "Block",
                "src": "1822:996:6"
              }
            ],
            "id": 7946,
            "name": "FunctionDefinition",
            "src": "1642:1176:6"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mintProoved",
              "scope": 8020,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "firstInput",
                      "scope": 8019,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7947,
                        "name": "ElementaryTypeName",
                        "src": "3069:7:6"
                      }
                    ],
                    "id": 7948,
                    "name": "VariableDeclaration",
                    "src": "3069:18:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "secondInput",
                      "scope": 8019,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7949,
                        "name": "ElementaryTypeName",
                        "src": "3089:7:6"
                      }
                    ],
                    "id": 7950,
                    "name": "VariableDeclaration",
                    "src": "3089:19:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 8019,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7951,
                        "name": "ElementaryTypeName",
                        "src": "3110:7:6"
                      }
                    ],
                    "id": 7952,
                    "name": "VariableDeclaration",
                    "src": "3110:10:6"
                  }
                ],
                "id": 7953,
                "name": "ParameterList",
                "src": "3067:54:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8019,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 7954,
                        "name": "ElementaryTypeName",
                        "src": "3149:4:6"
                      }
                    ],
                    "id": 7955,
                    "name": "VariableDeclaration",
                    "src": "3149:4:6"
                  }
                ],
                "id": 7956,
                "name": "ParameterList",
                "src": "3148:6:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7958
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "solutionHash",
                          "scope": 8018,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 7957,
                            "name": "ElementaryTypeName",
                            "src": "3240:7:6"
                          }
                        ],
                        "id": 7958,
                        "name": "VariableDeclaration",
                        "src": "3240:20:6"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8029,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 7959,
                            "name": "Identifier",
                            "src": "3263:9:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8022,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 7960,
                                    "name": "Identifier",
                                    "src": "3273:3:6"
                                  }
                                ],
                                "id": 7961,
                                "name": "MemberAccess",
                                "src": "3273:16:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7948,
                                  "type": "uint256",
                                  "value": "firstInput"
                                },
                                "id": 7962,
                                "name": "Identifier",
                                "src": "3290:10:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7950,
                                  "type": "uint256",
                                  "value": "secondInput"
                                },
                                "id": 7963,
                                "name": "Identifier",
                                "src": "3301:11:6"
                              }
                            ],
                            "id": 7964,
                            "name": "FunctionCall",
                            "src": "3273:40:6"
                          }
                        ],
                        "id": 7965,
                        "name": "FunctionCall",
                        "src": "3263:51:6"
                      }
                    ],
                    "id": 7966,
                    "name": "VariableDeclarationStatement",
                    "src": "3240:74:6"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7968
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "sol",
                          "scope": 8018,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct SolnSquareVerifier.Solution",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Solution",
                              "referencedDeclaration": 7838,
                              "type": "struct SolnSquareVerifier.Solution"
                            },
                            "id": 7967,
                            "name": "UserDefinedTypeName",
                            "src": "3325:8:6"
                          }
                        ],
                        "id": 7968,
                        "name": "VariableDeclaration",
                        "src": "3325:20:6"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct SolnSquareVerifier.Solution storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7844,
                              "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                              "value": "solutions"
                            },
                            "id": 7969,
                            "name": "Identifier",
                            "src": "3348:9:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7958,
                              "type": "bytes32",
                              "value": "solutionHash"
                            },
                            "id": 7970,
                            "name": "Identifier",
                            "src": "3358:12:6"
                          }
                        ],
                        "id": 7971,
                        "name": "IndexAccess",
                        "src": "3348:23:6"
                      }
                    ],
                    "id": 7972,
                    "name": "VariableDeclarationStatement",
                    "src": "3325:46:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_a9422431398bab33f5dffa7c8b121b22aa3461358d1dad4ffe95a64088d3f437",
                                  "typeString": "literal_string \"Solution was not added\""
                                }
                              ],
                              "overloadedDeclarations": [
                                8038,
                                8039
                              ],
                              "referencedDeclaration": 8039,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7973,
                            "name": "Identifier",
                            "src": "3430:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "solver",
                                  "referencedDeclaration": 7835,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7968,
                                      "type": "struct SolnSquareVerifier.Solution storage pointer",
                                      "value": "sol"
                                    },
                                    "id": 7974,
                                    "name": "Identifier",
                                    "src": "3438:3:6"
                                  }
                                ],
                                "id": 7975,
                                "name": "MemberAccess",
                                "src": "3438:10:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 7976,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3452:7:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 7977,
                                    "name": "Literal",
                                    "src": "3460:1:6"
                                  }
                                ],
                                "id": 7978,
                                "name": "FunctionCall",
                                "src": "3452:10:6"
                              }
                            ],
                            "id": 7979,
                            "name": "BinaryOperation",
                            "src": "3438:24:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20776173206e6f74206164646564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution was not added\"",
                              "value": "Solution was not added"
                            },
                            "id": 7980,
                            "name": "Literal",
                            "src": "3464:24:6"
                          }
                        ],
                        "id": 7981,
                        "name": "FunctionCall",
                        "src": "3430:59:6"
                      }
                    ],
                    "id": 7982,
                    "name": "ExpressionStatement",
                    "src": "3430:59:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_b832394531252a0d75bc8e6df91e1887698a9a5d66004c5049479987a2a723a1",
                                  "typeString": "literal_string \"Solution was not added by current sender\""
                                }
                              ],
                              "overloadedDeclarations": [
                                8038,
                                8039
                              ],
                              "referencedDeclaration": 8039,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7983,
                            "name": "Identifier",
                            "src": "3551:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "solver",
                                  "referencedDeclaration": 7835,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7968,
                                      "type": "struct SolnSquareVerifier.Solution storage pointer",
                                      "value": "sol"
                                    },
                                    "id": 7984,
                                    "name": "Identifier",
                                    "src": "3559:3:6"
                                  }
                                ],
                                "id": 7985,
                                "name": "MemberAccess",
                                "src": "3559:10:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8035,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7986,
                                    "name": "Identifier",
                                    "src": "3573:3:6"
                                  }
                                ],
                                "id": 7987,
                                "name": "MemberAccess",
                                "src": "3573:10:6"
                              }
                            ],
                            "id": 7988,
                            "name": "BinaryOperation",
                            "src": "3559:24:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20776173206e6f742061646465642062792063757272656e742073656e646572",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution was not added by current sender\"",
                              "value": "Solution was not added by current sender"
                            },
                            "id": 7989,
                            "name": "Literal",
                            "src": "3585:42:6"
                          }
                        ],
                        "id": 7990,
                        "name": "FunctionCall",
                        "src": "3551:77:6"
                      }
                    ],
                    "id": 7991,
                    "name": "ExpressionStatement",
                    "src": "3551:77:6"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_32528b7f22663c04443e2d49d2163bb7ee22788f1d70fb1c9eb5e0de6206b6da",
                                  "typeString": "literal_string \"Solution already used for minting\""
                                }
                              ],
                              "overloadedDeclarations": [
                                8038,
                                8039
                              ],
                              "referencedDeclaration": 8039,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7992,
                            "name": "Identifier",
                            "src": "3718:7:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "wasMinted",
                                  "referencedDeclaration": 7837,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7968,
                                      "type": "struct SolnSquareVerifier.Solution storage pointer",
                                      "value": "sol"
                                    },
                                    "id": 7993,
                                    "name": "Identifier",
                                    "src": "3727:3:6"
                                  }
                                ],
                                "id": 7994,
                                "name": "MemberAccess",
                                "src": "3727:13:6"
                              }
                            ],
                            "id": 7995,
                            "name": "UnaryOperation",
                            "src": "3726:14:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20616c7265616479207573656420666f72206d696e74696e67",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution already used for minting\"",
                              "value": "Solution already used for minting"
                            },
                            "id": 7996,
                            "name": "Literal",
                            "src": "3742:35:6"
                          }
                        ],
                        "id": 7997,
                        "name": "FunctionCall",
                        "src": "3718:60:6"
                      }
                    ],
                    "id": 7998,
                    "name": "ExpressionStatement",
                    "src": "3718:60:6"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        8000
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "result",
                          "scope": 8018,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 7999,
                            "name": "ElementaryTypeName",
                            "src": "3848:4:6"
                          }
                        ],
                        "id": 8000,
                        "name": "VariableDeclaration",
                        "src": "3848:11:6"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1510,
                              "type": "function (address,uint256) returns (bool)",
                              "value": "mint"
                            },
                            "id": 8001,
                            "name": "Identifier",
                            "src": "3862:4:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7952,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 8002,
                            "name": "Identifier",
                            "src": "3867:2:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "index",
                              "referencedDeclaration": 7833,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7968,
                                  "type": "struct SolnSquareVerifier.Solution storage pointer",
                                  "value": "sol"
                                },
                                "id": 8003,
                                "name": "Identifier",
                                "src": "3871:3:6"
                              }
                            ],
                            "id": 8004,
                            "name": "MemberAccess",
                            "src": "3871:9:6"
                          }
                        ],
                        "id": 8005,
                        "name": "FunctionCall",
                        "src": "3862:19:6"
                      }
                    ],
                    "id": 8006,
                    "name": "VariableDeclarationStatement",
                    "src": "3848:33:6"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8000,
                          "type": "bool",
                          "value": "result"
                        },
                        "id": 8007,
                        "name": "Identifier",
                        "src": "3939:6:6"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "wasMinted",
                                      "referencedDeclaration": 7837,
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7968,
                                          "type": "struct SolnSquareVerifier.Solution storage pointer",
                                          "value": "sol"
                                        },
                                        "id": 8008,
                                        "name": "Identifier",
                                        "src": "4031:3:6"
                                      }
                                    ],
                                    "id": 8010,
                                    "name": "MemberAccess",
                                    "src": "4031:13:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "74727565",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "bool",
                                      "type": "bool",
                                      "value": "true"
                                    },
                                    "id": 8011,
                                    "name": "Literal",
                                    "src": "4047:4:6"
                                  }
                                ],
                                "id": 8012,
                                "name": "Assignment",
                                "src": "4031:20:6"
                              }
                            ],
                            "id": 8013,
                            "name": "ExpressionStatement",
                            "src": "4031:20:6"
                          }
                        ],
                        "id": 8014,
                        "name": "Block",
                        "src": "3947:115:6"
                      }
                    ],
                    "id": 8015,
                    "name": "IfStatement",
                    "src": "3935:127:6"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7956
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8000,
                          "type": "bool",
                          "value": "result"
                        },
                        "id": 8016,
                        "name": "Identifier",
                        "src": "4079:6:6"
                      }
                    ],
                    "id": 8017,
                    "name": "Return",
                    "src": "4072:13:6"
                  }
                ],
                "id": 8018,
                "name": "Block",
                "src": "3155:938:6"
              }
            ],
            "id": 8019,
            "name": "FunctionDefinition",
            "src": "3047:1046:6"
          }
        ],
        "id": 8020,
        "name": "ContractDefinition",
        "src": "579:3522:6"
      }
    ],
    "id": 8021,
    "name": "SourceUnit",
    "src": "0:4102:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0x87197c1a5911B3157B56a123e3Df2cAaF68Ee282",
      "transactionHash": "0xa024c7a01fec99084992bc2c47138bad87ef7d6f9129e9804f15468680c9f1fd"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2021-10-13T10:24:15.008Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract",
        "return": "uint256 representing the total amount of tokens"
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}`