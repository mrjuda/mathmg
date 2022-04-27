// calculate.test.js

import calculate from './calculate';

it('divides 10 ÷ 2 to equal 5', () => {
  const objTest = { total: '10', next: '2', operation: '÷' };
  const buttonName = '=';
  const expResponse = { next: null, operation: null, total: '5' };
  expect(calculate(objTest, buttonName)).toEqual(expResponse);
});
