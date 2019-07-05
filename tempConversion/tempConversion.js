const ftoc = function(tempInFahrenheit) {
  let tempInCelsius = Math.round(((tempInFahrenheit - 32)*(5/9)) * 10) / 10;
  return tempInCelsius;
}

const ctof = function(tempInCelsius) {
  let tempInFahrenheit = Math.round((tempInCelsius * (9/5) + 32)*10) / 10; // rounds to 1 decimal
  return tempInFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
