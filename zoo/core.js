data = require('./data');

function entryCalculator (entrants) {
  if (entrants == undefined) {
    return 0
  } else if (Object.keys(entrants).length === 0) {
    return 0
  } else if (entrants.Adult == 0 && entrants.Child == 0 && entrants.Senior == 0) {
    return 0;
  } else if (entrants.Adult > 0 || entrants.Child > 0 || entrants.Senior > 0) {
    return (entrants.Adult * data.prices.Adult + entrants.Child * data.prices.Child + entrants.Senior * data.prices.Senior)
  }
};

function schedule (dayName) {

};

function animalCount (species) {
  // your code here
};

function animalMap (options) {
  // your code here
};

function animalPopularity (rating) {
  // your code here
};

function animalsByIds (ids) {
  // your code here
};

function animalByName (animalName) {
  // your code here
};

function employeesByIds (ids) {
  // your code here
};

function employeeByName (employeeName) {
  // your code here
};

function managersForEmployee (idOrName) {
  // your code here
};

function employeeCoverage (idOrName) {
  // your code here
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
