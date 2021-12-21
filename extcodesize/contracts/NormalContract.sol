//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "./Victim.sol";

contract NormalContract {
    bool public attack;

    //Victim v;

    constructor(address _v) public {}

    function callingOutsideConstructor(address _address) public {
        v = Victim(_address);
        attack = v.isContract();

        console.log(attack);
    }

    function name() external returns (uint256) {
        return "I'm a normal contract!";
    }
}
