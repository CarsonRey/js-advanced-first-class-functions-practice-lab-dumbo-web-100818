// Code your solution in this file!
// function logDriverNames(drivers){
//   const callback = function(driver, i, drivers){
//     console.log(driver);
//   }
//   return drivers.forEach(callback);
// }

// first-class functions are stored in constants!!

const logDriverNames = function(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location){
  return drivers.forEach(function(driver){
     if (driver.hometown === location){
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function(drivers){
  return drivers.slice(0).sort(function(driverOne, driverTwo){
    return driverOne.revenue - driverTwo.revenue;
  });
}
// we want a new array with the same contents of the original so we should use .slice(0) (not splice which is destructive)
// we're going to be sorting the drivers based on their revenue which is an integer meaning we have to use a modified .sort() so that it reflects that the integer is an attribute. We do this by comparing drivers to each other (kind of like the .max method in Ruby)

const driversByName = function(drivers){
  return drivers.slice(0).sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

const totalRevenue = function(drivers){
  return drivers.reduce(function (aggregate, driver, i, drivers){
    return aggregate + driver.revenue;
  }, 0);
  return aggregate;
}
// reduce takes two arguments, a function(agg, el, i, arr) & a value for agg to start at. You must return the agg at the end of your function

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length;
}
