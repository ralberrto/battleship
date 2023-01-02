const Ship = require('./ship');

describe('Ship', () => {
  test('Length', () => {
    const length = Math.floor(Math.random() * (5 - 2) + 2);
    const ship = Ship(length);
    expect(ship.length).toEqual(length);
  });
  test('Length too short error', () => {
    expect(() => {
      const ship = Ship(1);
    }).toThrow(RangeError);
  });
  test('Length too long error', () => {
    expect(() => {
      const ship = Ship(6);
    }).toThrow(RangeError);
  });
});