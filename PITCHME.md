# Developpement Smart Contract Ethereum

---

## Introduction

Ce tutoriel nous permettras de nous familiariser avec les outils dédiés au développement de Smart Contract Ethereum ainsi que leurs déploiement

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

Et également un fichier truffle.js contenant la configuration des réseaux Ethereum où seront déployés les contracts

--- 

* Ouvrer le dossier dans Visual Studio Code
* Dans le dossier "contracts" créer un fichier "partage.sol"

Un contract est un équivalent d'une classe dans un langage comme Java. Voyons voir ça avec un contrat simple de portefeuille partagé entre utilisateurs

---?code=partage.sol&title=Partage.sol

@[1](Prépocesseur indiquant la version de Solidity utilisé)
@[4](Attribut mapping : structure de données correspond à un Map<Adress, Int>, les attributs sont sauvegardés dans la blockchain)
@[6-8](Fonction permettant de déposer de l'argent)
@[10-12](Fonction pour récuperer les différentes parts)

---

### Tests du Smart Contract

Lien : https://bit.ly/2Lzqi9e

Installons quelques dependances :

* npm init
* npm install -D chai chai-as-promised chai-bignumber

---?code=partage.test.js&title=Test partage

@[1-2](Truffle injecte automatiquement quelques dépendances comme Web3 qui permet de communiquer avec la blockchain)
@[17-21](Test de création du contrat)
@[24-31](Test des fonctions du contrat)

---

### Tests

Lien : https://bit.ly/2ITjaTm

Lancez le test : 
```cmd
truffle test
```

---

## Déploiement dans une blockchain locale

Ganache simule un noeud ethereum ainsi qu'une blockchain active. Elle crée également une dizaine de compte avec des ethers dessus.

![Ganache](https://cdn-images-1.medium.com/max/800/1*5cApmJQCnFBpYRJ_47emIg.png)


--- 

## Création de la migration

Créer un fichier migrations/2_deploy_contracts.js

```js
var Partages = artifacts.require('Partages')

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Partages)
}
```

Lien : https://bit.ly/2KZylen

---

### Configuration du serveur Ganache

Modifier la configuration de truffle dans le fichier truffle.js

```js
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*'
    }
  }
}
```

--- 

### Déploiement du contrat !

Dans la console taper la commande pour lancer la migration :
```cmd
truffle migrate --network development
```

Dans Ganache, verifiez dans l'onglet transactions que le déploiement de votre contract à bien eu lieu 

--- 

## Amélioration du Smart Contract

Documentation de Solidity : http://solidity.readthedocs.io/en/v0.4.24/

Executer du code Solidity dans le navigateur : https://ethereum.github.io/browser-solidity/

Objectifs : Pouvoir permettre au propriétaire du smart contract de pouvoir retirer les fonds.


--- 

## A venir

* Déploiement sur le reseau testnet
* Tutoriel sur le développement avec Solidity
* Travaux Pratiques 