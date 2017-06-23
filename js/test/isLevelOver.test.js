import assert from 'assert';
import isLevelOver from '../utils/isLevelOver';

describe(`isLevelOver`, () => {
  it(`should returns false when the number of question less than 10`, () => {
    assert.equal(isLevelOver(9), false);
  });

  it(`should returns true when the number of question equal 10`, () => {
    assert.equal(isLevelOver(10), true);
  });
});
