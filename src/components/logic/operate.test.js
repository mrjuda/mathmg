// operate.test.js

import operate from './operate';

it('subtracts 7 - 1 to equal 6', () => {
  expect(operate('7', '1', '-')).toBe('6');
});
