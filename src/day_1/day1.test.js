import { 
  calculateFuel,
  calculateTotalFuelRequired,
  calculateAllTheFuel,
} from './index';

describe('Day 1', () => {
  test('calculateFuel()', () => {
    expect(calculateFuel(12)).toBe(2);
    expect(calculateFuel(14)).toBe(2);
    expect(calculateFuel(1969)).toBe(654);
    expect(calculateFuel(100756)).toBe(33583);
  });

  test('calculateAllTheFuel()', () => {
    expect(calculateAllTheFuel(100756)).toBe(50346);
  });

  test('calculateTotalFuelRequired()', () => {
    const stubbedModules = [12, 14, 1969, 100756];
    expect(calculateTotalFuelRequired(stubbedModules)).toBe(51316);
  });
});

