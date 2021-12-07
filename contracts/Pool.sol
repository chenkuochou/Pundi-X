//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./MPUNDIX.sol";
import "./MPURSE.sol";

contract Pool {
    using SafeERC20 for MPUNDIX;
    using SafeERC20 for MPURSE;

    MPUNDIX public depositToken;
    MPURSE public redeemToken;
    uint256 private poolBalance;

    constructor(address _depositToken, address _redeemToken) {
        depositToken = MPUNDIX(_depositToken);
        redeemToken = MPURSE(_redeemToken);
    }

    function deposit(uint256 amount) external returns (bool success) {
        require(amount > 0, "Deposit more than 0");

        poolBalance += (amount);

        depositToken.safeTransferFrom(msg.sender, address(this), amount);
        redeemToken.safeTransfer(msg.sender, amount);

        return success;
    }

    function withdraw(uint256 amount) external returns (bool success) {
        require(amount > 0, "Withdraw more than 0");
        require(amount <= redeemToken.balanceOf(address(this)), "Overdrawn!");

        poolBalance -= (amount);

        redeemToken.safeTransferFrom(msg.sender, address(this), amount);
        depositToken.safeTransfer(msg.sender, amount);

        return success;
    }

    receive() external payable {}
}
