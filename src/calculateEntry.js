const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, guest) => {
    if (guest.age < 18) {
      acc.child += 1;
    } else if (guest.age >= 18 && guest.age < 50) {
      acc.adult += 1;
    } else { acc.senior += 1; }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) { return 0; }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
