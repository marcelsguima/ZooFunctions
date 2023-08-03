const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDay(day) {
  if (day === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (Object.keys(hours).includes(day)) {
    return {
      [day]: {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((animD) => animD
          .availability.includes(day)).map((animN) => animN.name),
      },
    };
  }
}

function fullSchedule() {
  const allDays = Object.keys(hours);
  return allDays.reduce((acc, obj) => ({ ...acc, ...getDay(obj) }), {});
}

function getAvailability(animal) {
  const dWeek = data.species.find((animals) => animals.name === animal);
  if (dWeek) { return dWeek.availability; }
}

function getSchedule(scheduleTarget) {
  if (getAvailability(scheduleTarget)) { return getAvailability(scheduleTarget); }
  if (getDay(scheduleTarget)) { return getDay(scheduleTarget); }
  return fullSchedule();
}
// console.log(species.filter((animD) => animD.availability.includes('Tuesday')));
// console.log(getAvailability('lions'));
// console.log(getDay('Tuesday'));
console.log(getSchedule('banana'));

module.exports = getSchedule;
