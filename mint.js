const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const config = require('./mintConfig');
const MNEMONIC = config.MNEMONIC
const INFURA_KEY = config.INFURA_KEY
let NFT_CONTRACT_ADDRESS = config.CONTRACT_ADDRESS
let OWNER_ADDRESS = config.OWNER_ADDRESS
const NETWORK = config.NETWORK
const proof = [
    //require('./proofs/proof2')
    //require('./proofs/proof3'),
    //require('./proofs/proof4'),
    //require('./proofs/proof5'),
    //require('./proofs/proof6'),
    //require('./proofs/proof7'),
    //require('./proofs/proof8'),
    //require('./proofs/proof9'),
    require('./proofs/proof10'),
    require('./proofs/proof11'),
];
const CONTRACT_FILE = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_FILE.abi;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

async function main() {
    
    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(
        provider
    );

    console.log( "Getting accounts");

    let accs = await web3Instance.eth.getAccounts();

    console.log( accs )


        
    const nftContract =new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

    console.log( "Let's go");

    let tst = await nftContract.methods.owner().call();

    console.log( "Contract Owner: %s", tst );

    // Tokens minted directly to the owner.
    let tokenId = 0;
    proof.forEach(async(proof) =>  {
        tokenId ++;
        console.log("Proof %d", tokenId)
        try {
            console.log( "Adding solution");
            await nftContract.methods.addSolution(proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                proof.inputs
            ).send( {from:OWNER_ADDRESS, gas: 3000000 }, (error,result) => {
                if(error){
                    console.log(error);
                }else{
                    console.log("Added Solution. Transaction: " + result); 
                }
                
            })

            console.log( "Minting token");
            await nftContract.methods.mintProoved(
                proof.inputs[0],
                proof.inputs[1],
                OWNER_ADDRESS
            ).send( {from:OWNER_ADDRESS, gas: 3000000 }, (error,result) => {
                if(error){
                    console.log(error);
                }else{
                    console.log("Token Minted! Transaction: " + result); 
                }
                
            })
        }
        catch(e) {
            console.log( "An error occured:\n %s",e)
        }

        
    });


    console.log( "Finished.");

    

               /*
                await nftContract.methods.mintVerified(
                    OWNER_ADDRESS, 
                    tokenId, 
                    proof.proof.A, 
                    proof.proof.A_p, 
                    proof.proof.B, 
                    proof.proof.B_p, 
                    proof.proof.C, 
                    proof.proof.C_p, 
                    proof.proof.H, 
                    proof.proof.K, 
                    proof.input)
                .send({ from: OWNER_ADDRESS, gas:3000000 }, (error, result) => {
                        if(error){
                            console.log(error);
                        }else{
                            console.log("Minted Token. Transaction: " + result); 
                        }
                    });
                    */
            
        //}
    //} 

}

main();
/*.then( result => {
    console.log( "We are done")
}).catch( console.log);*/



/*

    // Tokens minted directly to the owner.
    let tokenId = 0;
    proof.forEach(async(proof) =>  {
        tokenId ++;
        console.log("Proof %d", tokenId)
        try {
            console.log( "Adding solution");
            await nftContract.methods.addSolution(proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                proof.inputs
            ).send( {from:OWNER_ADDRESS, gas: 3000000 });/*, (error,result) => {
                console.log( "Hello");/*
                if(error){
                    console.log(error);
                }else{
                    console.log("Added Solution. Transaction: " + result); 
                }
                
            }).catch( e => {
                console.log( "Error e");
            })


            console.log( "Solution added.");
        }
        catch(e) {
            console.log( "An error occured:\n %s")
        }

        
    });*/