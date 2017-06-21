import assert from 'assert';
import {initialState, setLives} from './game';

describe(`Checking total game time`, () => {
  it(`should return 2`, () => {
    assert.equal(initialState.time / 60, 2);
  });
});

describe(`Setting lives`, () => {
  it(`should return 2 when the game was lost at first time`, () => {
    assert.equal(setLives(initialState, initialState.lives - 1).lives, 2);
  });
});
