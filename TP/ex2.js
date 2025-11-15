import Etudiant from "./ex1";
import { Etablissement, afficherInfos } from "./ex1";

const etudiant1 = new Etudiant('Ahmed', 20);
const etudiant2 = new Etudiant('Sara', 22);
etudiant1.afficherInfos();
etudiant2.afficherInfos();
console.log(`Etablissement: ${Etablissement}`);