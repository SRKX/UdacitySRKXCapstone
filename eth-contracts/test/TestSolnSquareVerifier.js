// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates


var Verifier = artifacts.require('Verifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');




contract('TestSolnSquareVerifier', accounts =>  {
    const account_one = accounts[0];
    const account_two = accounts[1];

    const proof = {
        "proof": {
            "a": ["0x2536c90715508d2fefe476d0416e89f9a9376de459f8fdb06ad854341733ef10", "0x12f4dc1e917adb3914fb86c56eba996547d244b66cab87b9c07be35793edbbaf"],
            "b": [["0x027e1e60b57f1bbeaaff1be855593f8f55dec05fac4aa2bdf6086edfa8abc286", "0x223f2c0a9dba54b7a80c026745967a36de361f82636f8d96226c3e6574f7d694"], ["0x0ed847779bfd4cdcee69e01cb34bf93c9814b361de41ee8ac08dd9c33347fa9a", "0x2b779598fd5e4ae03a061e33b8b8dd914d0bae30dc30dabf4aece803123f62c6"]],
            "c": ["0x2cf44e37b2f747e41100771c690a69247edca32e1e8386dd44d4a9ff0a97604d", "0x1dbb5a589d77e5c9dd2489ade87433dbc49659451fa72fafca763ae72137a343"]
        },
        "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    };

    //We create a wrong input to show it does not work
    const faultyInputs = ["0x0000000000000000000000000000000000000000000000000000000000000019", "0x0000000000000000000000000000000000000000000000000000000000000001"]


    before('setup contract', async() => {
        //We first deploy the verifier contract
        this.verifierContract = await Verifier.new();
        //And then the SolnSquareVerifier contract using the address of the verifier
        this.solnSquareContract = await SolnSquareVerifier.new(this.verifierContract.address, "TEST", "TST");
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('can add solution only if it is valid', async () => {
        
        let exceptionThrownOnValid = false;
        try {
            await this.solnSquareContract.addSolution(
                proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                proof.inputs,
                { from: account_one }
            );
        }
        catch(e) {
            exceptionThrownOnValid = true;

        }
        
        let exceptionThrownFaulty = false
        try {
            await this.solnSquareContract.addSolution(
                proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                faultyInputs,
                { from: account_one }
            );
        }
        catch(e) {
            exceptionThrownFaulty = true;
        }

        
        let exceptionThrownDuplicate = false
        try {
            await this.solnSquareContract.addSolution(
                proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                proof.inputs,
                { from: account_one }
            );
        }
        catch(e) {
            //console.log(e);
            exceptionThrownDuplicate = true;
        }
        
        

        assert.isFalse(exceptionThrownOnValid, "Verifier does not validate proof");
        assert.isTrue(exceptionThrownFaulty, "Did not fail with faulty proof");
        assert.isTrue(exceptionThrownDuplicate, "Did not fail with duplicate proof");

        
    });

    it('cant mint token if account didnt register solution', async () => {


        /*
         * Let's try to mint a registered solution with an account
         * different from the one which registered it.
         * => should fail
         */
        let exceptionThrownOnOtherAccount = false;
        try {
            await this.solnSquareContract.mintProoved(
                proof.inputs[0],
                proof.inputs[1],
                account_one,
                {from:account_two}
            )
        }
        catch(e) {
            exceptionThrownOnOtherAccount = true;
        }
        assert.isTrue(exceptionThrownOnOtherAccount, "Contract should reject minting from other account");
        
    });


    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('can mint token when solution was registered by sender', async () => {

        //We know the solution was previously added, so we can try to add
        let exceptionThrownOnValid = false;
        try {
            await this.solnSquareContract.mintProoved(
                proof.inputs[0],
                proof.inputs[1],
                account_two,
                {from:account_one}
            )
        }
        catch(e) {
            console.log(e);
            exceptionThrownOnValid = true;
        }

        //Let's try to mint something without solution => should fail
        let exceptionThrownOnFaulty = false;
        try {
            await this.solnSquareContract.mintProoved(
                faultyInputs[0],
                faultyInputs[1],
                account_one,
                {from:account_one}
            )
        }
        catch(e) {
            exceptionThrownOnFaulty = true;
        }

        assert.isFalse(exceptionThrownOnValid, "Contract rejects minting on valid proof");
        assert.isTrue(exceptionThrownOnFaulty, "Contract should reject unregistered proof");
    });


    it('cant mint token if it was already minted', async () => {


        //Let's try to mint again them same solution => should fail
        let exceptionThrownOnAlreadyMinted = false;
        try {
            await this.solnSquareContract.mintProoved(
                proof.inputs[0],
                proof.inputs[1],
                account_one,
                {from:account_one}
            )
        }
        catch(e) {
            exceptionThrownOnAlreadyMinted = true;
        }
        assert.isTrue(exceptionThrownOnAlreadyMinted, "Contract should reject proof when already minted");
        
    });

})

   









