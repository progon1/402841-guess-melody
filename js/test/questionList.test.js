import assert from 'assert';
import questionsList from '../data/questions-list';

describe(`Checking amount of questions`, () => {
  it(`should returns 10`, () => {
    assert.equal(Object.entries(questionsList).length, 10);
  });
});
