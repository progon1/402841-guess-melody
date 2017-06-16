import assert from 'assert';
import game from './game';

describe(`Checking total game time`, () => {
  it(`should return 2`, () => {
    assert.equal(game.time / 60, 2);
  });
});
