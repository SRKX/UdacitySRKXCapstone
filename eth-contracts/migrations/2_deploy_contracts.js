// migrating the appropriate contracts
/*
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
*/
var JSUdacityERC721Token = artifacts.require("./JSUdacityERC721Token.sol");
//var CustomERC721Token = artifacts.require("./CustomERC721Token.sol");

module.exports = function(deployer) {
  deployer.deploy(JSUdacityERC721Token, "TEST", "TST");
  

  /*  
  deployer.deploy(SquareVerifier).then( () => {
    deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "TEST", "TST");
  });
  */
  
  
};
