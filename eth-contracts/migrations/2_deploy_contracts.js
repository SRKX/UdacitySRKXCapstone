// migrating the appropriate contracts
/*
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
*/
var JSUdacityERC721Token = artifacts.require("./JSUdacityERC721Token.sol");

module.exports = function(deployer) {
  //deployer.deploy(JSUdacityERC721Token, "TEST", "TST");
  deployer.deploy(JSUdacityERC721Token);

  /*  
  deployer.deploy(SquareVerifier).then( () => {
    deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "TEST", "TST");
  });
  */
  
  
};
