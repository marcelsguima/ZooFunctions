const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnim = {};
    data.species.forEach((anim) => { allAnim[anim.name] = anim.residents.length; });
    return allAnim;
  }
  if (animal.sex) {
    const sex = data.species.find((specie) => specie.name === animal.specie);
    return sex.residents.filter((animPop) => animPop.sex === animal.sex).length;
  }
  if (animal.specie) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
}
console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
