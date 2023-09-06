const telephoneCheck = require('../src/telephoneCheck');

describe('telephoneCheck', () => {
  test('should return true for the number given', () => {
    expect(telephoneCheck('555-555-5555')).toBe(true);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('(555) 555-5555')).toBe(true);
    expect(telephoneCheck('555 555 5555')).toBe(true);
    expect(telephoneCheck('5555555555')).toBe(true);
    expect(telephoneCheck('1 555 555 5555')).toBe(true);
  });
});

describe('telephoneCheck', () => {
  test('should return false for the number given', () => {
    expect(telephoneCheck('555-5555')).toBe(false);
    expect(telephoneCheck('1 555)555-5555')).toBe(false);
    expect(telephoneCheck('123**&!!asdf#')).toBe(false);
    expect(telephoneCheck('2(757)6227382')).toBe(false);
    expect(telephoneCheck('1(555555-5555')).toBe(false);
    expect(telephoneCheck("2(757)622-7382")).toBe(false);
    expect(telephoneCheck("555)-555-5555")).toBe(false);
    expect(telephoneCheck("55 55-55-555-5")).toBe(false);
    expect(telephoneCheck("11 555-555-5555")).toBe(false);
  });
});
