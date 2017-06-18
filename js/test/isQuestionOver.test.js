import assert from 'assert';
import isQuestionOver from '../utils/isQuestionOver';

describe(`isQuestionOver`, () => {
  it(`should returns false when the number of question less than 10`, () => {
    assert.equal(isQuestionOver(`question-1`), false);
  });

  it(`should returns true when the number of question equal 10`, () => {
    assert.equal(isQuestionOver(`question-10`), true);
  });
});
