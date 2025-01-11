const convertToCelsius = function(degreeF) {
  // °F ≘ (x − 32) × ⁠5/9⁠ °C 
  let degreeC = (degreeF-32)*(5/9);
  return Math.round(degreeC*10)/10;
};

const convertToFahrenheit = function(degreeC) {
    // °C ≘ (x × ⁠9/5⁠ + 32) °F 	
  let degreeF = degreeC *(9/5)+32;
  return Math.round(degreeF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
