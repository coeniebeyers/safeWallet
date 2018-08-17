pragma solidity ^0.4.23;

contract IdentityContract {
  address public owner;

  mapping (address => uint) public customers; 

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function addCustomer(address _customerAddress) public restricted returns(bool){
    customers[_customerAddress] = 1;
    return true;
  }
}

