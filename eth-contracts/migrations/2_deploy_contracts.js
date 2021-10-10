// migrating the appropriate contracts
/*

*/
//var JSUdacityERC721Token = artifacts.require("./JSUdacityERC721Token.sol");
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");


module.exports = function(deployer) {
  //deployer.deploy(JSUdacityERC721Token, "TEST", "TST");
  

    
  deployer.deploy(SquareVerifier).then( () => {
    deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "TEST", "TST");
  });
  
  
  
};
