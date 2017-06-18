import assert from 'assert';
import switchQuestion from '../utils/switchQuestion';


const currentQuestion = `question-1`;

describe(`switchQuestion`, () => {
  it(`should return next question`, () => {
    assert.equal(switchQuestion(currentQuestion), `question-2`);
  });
});
