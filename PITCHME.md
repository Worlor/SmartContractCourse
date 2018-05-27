# Developpement Smart Contract Ethereum

---

### Outils nécessaires :

* NodeJS (v8+)
* Truffle (npm install -g truffle)
* Ganache (https://bit.ly/2IQfndw)

---

### Création du projet

Ouvrez un terminal node

```dos
mkdir projet
cd projet 
truffle init
```

Truffle va mettre en place le projet

--- 

#### Dossiers créés par Truffle

* **contracts** - Dossier pour les smart contracts. Un fichier Migrations.sol est déjà présent et permet le déploiement de smart contract
* **migrations** - Dossier pour les migrations (scripts permettant le déploiement du smart contract)
* **test** - Tests façon Mocha pour les contracts

Et également un fichier truffle.config pour configurer les réseaux où déployer les contracts

--- 

``` Solidity
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
```