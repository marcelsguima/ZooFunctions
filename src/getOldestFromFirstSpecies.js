const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsable = data.employees.find((fResp) => fResp.id === id).responsibleFor[0];
  const specieGot = data.species.find((anim) => anim.id === responsable);
  const animAge = Object.values(specieGot.residents);
  const age = animAge.reduce((acc, oldesd) => {
    if (acc.age > oldesd.age) {
      return acc;
    } return oldesd;
  });
  return Object.values(age);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
