pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
//import './verifier.sol';

contract SquareVerifier {
    function verifyTx(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
        ) public returns (bool r);
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is JSUdacityERC721Token {

    SquareVerifier private verifierContract;

    
    constructor(address verifierAddress, string memory name, string memory symbol) JSUdacityERC721Token(name, symbol) public {
        verifierContract = SquareVerifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address => DONE
    struct Solution {
        uint256 index;
        address solver;
        bool wasMinted;
    }



    // TODO define an array of the above struct
    // Note: in fact, we don't really need an array, keeping count of the 
    //       total number of solutions provided to increment the index is enough
    Counters.Counter private numberOfSolutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;



    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address solver);


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
        ) public returns (bool r) {

        //We generate a hash which represents this proof using the inputs
        bytes32 solutionHash = keccak256(abi.encodePacked(input[0],input[1]));

        //Check solution does not exist
        require(solutions[solutionHash].solver==address(0), "The solution was already added");


        //Check the solution is correct
        bool isProofValid = verifierContract.verifyTx(a, b, c, input);
        require(isProofValid, "Provided proof is invalid");

        //We create the new solution struct, which is not yet minted
        //We add the solution to the mapping, using its hash
        solutions[solutionHash] = Solution(
            numberOfSolutions.current(),
            msg.sender,
            false
        );

        //We emit the event
        emit SolutionAdded(solutions[solutionHash].index, solutions[solutionHash].solver);

        //We increment the counter
        numberOfSolutions.increment();

        //All went well, we return true
        return true;
    }



    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintProoved( uint256 firstInput, uint256 secondInput, address to)
            public returns(bool) {

        //We generate a hash which represents this proof using the inputs
        bytes32 solutionHash = keccak256(abi.encodePacked(firstInput,secondInput));

        Solution storage sol = solutions[solutionHash];

        //We check this solution was registered
        require(sol.solver != address(0), "Solution was not added");
        //We check the solver is the current sender
        require(sol.solver == msg.sender, "Solution was not added by current sender");
        //Finally, we check that the solution has not already been used to mint
        require(sol.wasMinted, "Solution already used for minting");

        //If all of the above passed successfully, we mint
        bool result = mint(to, sol.index);

        //If solution was minted properfly
        if (result) {
            //We save the fact that this solution has now been minted
            sol.wasMinted = true;
        }

        return result;

    }

    
}
