const data = require('../data/zoo_data');

function currentSpecies(animal) {
  const animalget = data.species.filter(animal);
  return animalget;
}

console.log(currentSpecies('lions'));
