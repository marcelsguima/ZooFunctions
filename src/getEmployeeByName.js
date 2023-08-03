const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  const searchObject = data.employees.find(
    (person) => person.firstName === employeeName || person.lastName === employeeName,
  );

  return searchObject;
}
console.log(getEmployeeByName('Orloff'));
module.exports = getEmployeeByName;
