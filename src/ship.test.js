const Ship = require('./ship');

describe('Ship', () => {
  test('Length', () => {
    const length = Math.floor(Math.random() * (5 - 2) + 2);
    const ship = Ship(length);
    expect(ship.length).toEqual(length);
  });
});