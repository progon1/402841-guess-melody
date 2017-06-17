import assert from 'assert';
import {initialState} from './game';

describe(`Checking total game time`, () => {
  it(`should return 2`, () => {
    assert.equal(initialState.time / 60, 2);
  });
});
