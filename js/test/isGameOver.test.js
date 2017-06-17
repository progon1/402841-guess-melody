import assert from 'assert';
import isGameOver from '../utils/isGameOver';

describe(`gameOver`, () => {
  it(`should returns true when 2 minutes is over`, () => {
    assert.equal(isGameOver(120 * 1000), true);
  });
});
