var JSUdacityERC721Token = artifacts.require('JSUdacityERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await JSUdacityERC721Token.new("TEST", "TST", {from: account_one});

            // TODO: mint multiple tokens
            
            await this.contract.mint( account_two, 1, { from: account_one } );
            await this.contract.mint( account_two, 2, { from: account_one } );
            await this.contract.mint( account_three, 3, { from: account_one } );
            


        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal( totalSupply, 3, "Total supply is incorrect.");
        })

        it('should get token balance', async function () { 
            let balanceOfAccOne = await this.contract.balanceOf.call(account_one);
            let balanceOfAccTwo = await this.contract.balanceOf.call(account_two);
            let balanceOfAccThree = await this.contract.balanceOf.call(account_three);

            assert.equal(balanceOfAccOne, 0, "Account 1 has not token");
            assert.equal(balanceOfAccTwo, 2, "Account 2 has 2 tokens");
            assert.equal(balanceOfAccThree, 1, "Account 3 has 1 token");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri1 = await this.contract.tokenURI.call(1);
            let uri2 = await this.contract.tokenURI.call(2);
            let uri3 = await this.contract.tokenURI.call(3);

            assert.equal(uri1, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Incorrect URI for Token 1");
            assert.equal(uri2, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "Incorrect URI for Token 2");
            assert.equal(uri3, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "Incorrect URI for Token 3");
            
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_three, 1, {from:account_two});
            let balanceOfAccTwo = await this.contract.balanceOf.call(account_two);
            let balanceOfAccThree = await this.contract.balanceOf.call(account_three);
            assert.equal(balanceOfAccTwo, 1, "Account 2 now has 1 token");
            assert.equal(balanceOfAccThree, 2, "Account 3 noew has 2 tokens");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await JSUdacityERC721Token.new("TEST","TST",{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let exceptionThrown = false
            try {
                await this.contract.mint( account_two, 4 , {from:account_two});
            }
            catch(e) {
                exceptionThrown = true;
            }

            assert.isTrue(exceptionThrown, "Exception not thrown when minting from non-owner.")

        })

        it('should return contract owner', async function () { 
            let ownerAddress = await this.contract.owner.call();

            assert.equal(ownerAddress,account_one, "Owner address is incorrect");
        })

    });
})