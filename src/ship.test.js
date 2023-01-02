const Ship = require('./ship');

describe('Ship Queries', () => {
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

  test('Hits start in zero', () => {
    const ship = Ship(2);
    expect(ship.hits).toEqual(0);
  });
});

describe('Ship Commands', () => {
  test('Hit method increases ship\'s hits by 1', () => {
    const length = 2;
    const ship = Ship(length);
    for (let i = 0; i < length; i++) {
      ship.hit();
    }
    expect(ship.hits).toEqual(length);
  });

  test('Hits cannot be more than length', () => {
    const length = 2;
    const ship = Ship(length);
    expect(() => {
      for (let i = 0; i <= length; i++) {
        ship.hit();
      }
    }).toThrow(RangeError);
  });

  test('Ship sinks when receives an amount of hits equal to length', () => {
    const length = 2;
    const ship = Ship(length);
    for (let i = 0; i < length; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });

});