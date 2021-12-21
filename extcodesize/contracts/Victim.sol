//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";

contract Victim {
    
    function extcodesize() public view returns (bool) {
        address _address = msg.sender;
        uint32 size;

        assembly {
            size := extcodesize(_address)
        }

        return (size > 0);
    }
}
