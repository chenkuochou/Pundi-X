//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "./Victim.sol";

contract Attacker {
    bool public isContract;

    Victim public v;

    constructor(address _address) {
        v = Victim(_address);
        isContract = v.extcodesize();
    }

    function name() external pure returns (string memory) {
        return "I'm an attacker!";
    }
}
