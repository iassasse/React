const Etablissement = 'ISGI';
class Etudiant {
    constructor(nom, age) {
        this.nom = nom;

        this.age = age;
    }
    }
    function afficherInfos() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}, Etablissement: ${Etablissement}`);
    }
    export default Etudiant;
    export { Etablissement, afficherInfos };
