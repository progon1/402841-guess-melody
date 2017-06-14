import assert from 'assert';
import reduceLives from '../utils/reduceLives';
import game from '../data/game';

describe(`Reducing lives`, () => {
  it(`should return 2 when the game was lost at first time`, () => {
    assert.equal(reduceLives(game).lives, 2);
  });
});
