const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const searchObject = data.species.filter((species) => ids.find((id) => id === species.id));
  return searchObject;
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
