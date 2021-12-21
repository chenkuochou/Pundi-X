//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MPUNDIX is ERC20 {
    constructor(uint256 initialSupply) ERC20("mPUNDIX", "DIX") {
        _mint(msg.sender, initialSupply);
    }
}
