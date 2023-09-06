const checkCashRegister = require('../src/checkCashRegister');

describe('checkCashRegister', () => {
  test('should return an object', () => {
    expect(
      typeof checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ])
    ).toBe('object');
  });
  test('should return open and change', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ])
    ).toStrictEqual({ status: 'OPEN', change: [['QUARTER', 0.5]] });
    expect(
      checkCashRegister(3.26, 100, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ])
    ).toStrictEqual({
      status: 'OPEN',
      change: [
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.5],
        ['DIME', 0.2],
        ['PENNY', 0.04],
      ],
    });
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toStrictEqual({
      status: 'CLOSED',
      change: [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ],
    });
  });
});
