const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((anim) => anim.name === animal);
  return residents.every((animGot) => animGot.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 20));
module.exports = getAnimalsOlderThan;
