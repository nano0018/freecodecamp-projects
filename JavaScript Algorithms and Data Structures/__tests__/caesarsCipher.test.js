const caesarsCipher = require('../src/caesarsCipher');

describe('convertToRoman', () => {
  test('should return the ROT13 cipher decoded message of the coded input', () => {
    expect(caesarsCipher('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
    expect(caesarsCipher('SERR CVMMN!')).toBe('FREE PIZZA!');
    expect(caesarsCipher('SERR YBIR?')).toBe('FREE LOVE?');
    expect(caesarsCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
