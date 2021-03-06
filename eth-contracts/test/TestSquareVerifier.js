// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates

var Verifier = artifacts.require('Verifier');




contract('TestSquareVerifier', accounts =>  {
    const account_one = accounts[0];

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

        this.verifierContract = await Verifier.new();
    });

    // Test verification with correct proof
    // - use the contents from proof.json generated from zokrates steps
    it('can verify', async () => {
        let result = await this.verifierContract.verifyTx.call(
            proof.proof.a,
            proof.proof.b,
            proof.proof.c,
            proof.inputs
        );

        assert.isTrue(result, "Verifier does not validate proof");
    });

    // Test verification with incorrect proof
    it('detects wrong solution', async () => {
        let result = await this.verifierContract.verifyTx.call(
            proof.proof.a,
            proof.proof.b,
            proof.proof.c,
            faultyInputs
        );

        assert.isFalse(result, "Verifier validates wrong proof");
    });

})

   

