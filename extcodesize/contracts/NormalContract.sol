//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "./Victim.sol";

contract NormalContract {
    bool public isContract;

    Victim public v;

    function callingOutsideConstructor(address _address) public returns (bool) {
        v = Victim(_address);
        isContract = v.extcodesize();

        console.log(
            "Does Victim treat NormalContract as a contract?",
            isContract
        );

        return isContract;
    }

    function name() external pure returns (string memory) {
        return "I'm a normal contract!";
    }
}
