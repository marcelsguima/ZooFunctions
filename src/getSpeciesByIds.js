const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const specieGot = data.species.filter((species) => ids.find((id) => id === species.id));
  return specieGot;
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46',
  '89be95b3-47e4-4c5b-b687-1fabf2afa274'));

module.exports = getSpeciesByIds;
