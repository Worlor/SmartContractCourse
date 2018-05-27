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