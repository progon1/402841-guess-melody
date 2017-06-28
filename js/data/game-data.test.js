import assert from 'assert';
import {initialState, setLives, nextLevel} from './game';

const testQuestions = {
  'question-1': `test`,
  'question-2': `test`
};

describe(`Checking total game time`, () => {
  it(`should return 2`, () => {
    assert.equal(initialState.time / 60, 2);
  });
});

describe(`Setting lives`, () => {
  it(`should return 2 when the game was lost at first time`, () => {
    assert.equal(setLives(initialState, initialState.lives - 1).lives, 2);
  });

  it(`should throw error when it was passed negative number`, () => {
    assert.throws(() => setLives(initialState, -1));
  });
});

describe(`nextLevel`, () => {
  it(`should returns level 2 when there was transition from initial state`, () => {
    assert.strictEqual(nextLevel(initialState, testQuestions).level, 2);
  });
});
