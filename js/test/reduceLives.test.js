import assert from 'assert';
import reduceLives from '../utils/reduceLives';
import {initialState} from '../data/game';

describe(`Reducing lives`, () => {
  it(`should return 2 when the game was lost at first time`, () => {
    assert.equal(reduceLives(initialState.lives), 2);
  });
});
