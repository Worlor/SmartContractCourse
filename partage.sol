pragma solidity ^0.4.8;

contract Partage {
    mapping (address => uint) partages;
  
    function addPartage(uint partage) public {
        partages[msg.sender] = getPartages(msg.sender) + partage;
    }
 
    function getPartages(address addr) public view returns(uint) {
        return partages[addr];
    }
}