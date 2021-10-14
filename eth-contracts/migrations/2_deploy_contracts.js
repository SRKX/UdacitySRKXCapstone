// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");


module.exports = function(deployer) {
 
  console.log( "!!!Starting to deploy!!!!");

    
  deployer.deploy(SquareVerifier).then( () => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "TEST", "TST").then( () => {
      console.log( "Verifier address: %s", SquareVerifier.address);
      console.log( "SolnSquareVerifier address: %s", SolnSquareVerifier.address);
    }).catch( () => {
      console.log( "Something FAILED");
    })
  }).catch(  () => {
    console.log( "Something FAILED");
  });
  
  
  
};
