const convertToRoman = require('../src/romanNumeralConverter');

describe('convertToRoman', () => {
  test('should return the Roman numeral equivalent of the given number', () => {
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(4)).toBe('IV');
    expect(convertToRoman(5)).toBe('V');
    expect(convertToRoman(1004)).toBe('MIV');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });
});
