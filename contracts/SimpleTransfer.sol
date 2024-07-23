// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleTransfer {
    address public owner;

    // Event to log transfers
    event Transfer(address indexed from, address indexed to, uint amount);

    constructor() {
        owner = msg.sender; // Set the contract deployer as the owner
    }

    // Function to transfer Ether to another account
    function transfer(address payable _to) public payable {
        require(msg.sender == owner, "Only the owner can initiate transfers");
        require(msg.value > 0, "Amount must be greater than 0");

        // Transfer the Ether
        _to.transfer(msg.value);

        // Emit the Transfer event
        emit Transfer(msg.sender, _to, msg.value);
    }

    // Function to withdraw Ether from the contract (only for owner)
    function withdraw(uint _amount) public {
        require(msg.sender == owner, "Only the owner can withdraw");
        require(address(this).balance >= _amount, "Insufficient balance");

        payable(owner).transfer(_amount);
    }

    // Function to check contract balance
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
