//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MPURSE is ERC20 {
    constructor(uint256 initialSupply) ERC20("mPURSE", "RSE") {
        _mint(msg.sender, initialSupply);
    }
}
