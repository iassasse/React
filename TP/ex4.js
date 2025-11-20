const clients = [
  { name: 'Alice', age: 28, montant: 5000 },
  { name: 'Bob', age: 35, montant: 4000 },
  { name: 'Charlie', age: 32, montant: 7000 },
  { name: 'Diana', age: 24, montant: 4000 },
];
const totalMontants = clients.reduce(function(total, client) {
    return total +=client.montant
},0);


console.log(totalMontants);