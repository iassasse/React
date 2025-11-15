const Personne = {
  nom: "assasse",
  age: 22,
  adresse: {
    rue: 'rue almassira',
    ville: "souk sebt ouled nemma",


    }
}
const nom=Personne.nom
const age=Personne.age
const rue=Personne.adresse.rue
const ville=Personne.adresse.ville
console.log(`Nom: ${nom}, Age: ${age}, Rue: ${rue}, Ville: ${ville}`)


// est indique a:
//const {nom,age,adresse:{rue,ville}}=Personne
//console.log(`Nom: ${nom}, Age: ${age}, Rue: ${rue}, Ville: ${ville}`)