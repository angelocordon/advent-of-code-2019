export function calculateFuel (num) {
  return (Math.floor(num / 3) - 2);
}

export function calculateAllTheFuel (num) {
  let fuel = num;
  let mods = [];

  while (fuel > 0) {
    mods.push(fuel);
    fuel = calculateFuel(fuel);
  }

  return mods.reduce((a, b) => a + b) - num;
}

export function calculateTotalFuelRequired (modules) {
  return modules
    .map(module => calculateAllTheFuel(module))
    .reduce((a, b) => a + b);
}