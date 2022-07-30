const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === '') {
    const count = data.species.forEach(
      (animal) => {},
    );
    return count;
  }
}
console.log(countAnimals());
module.exports = countAnimals;
