pragma solidity ^0.5.10;
contract estMembreDelAssemblee {

address[] membres;

    function rejoindre() public {
        membres.push(msg.sender);
        }

    function estMembre(address _utilisateur) public view returns (bool) {
        for (uint i = 0; i < membres.length; i++) {
            if (membres[i] == _utilisateur){
                return true;
            } else {
                return false;
            }
        }
    }
}