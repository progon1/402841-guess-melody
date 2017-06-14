import assert from 'assert';
import sort from '../utils/sortStatistics';
import statistics from '../data/statistics';

const example = [
  {time: 20, answers: 10},
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7}
];

describe(`sortStatistics`, () => {
  it(`should return sorted array by answer field in descending order and time field in ascending order`, () => {
    assert.deepEqual(sort(statistics), example);
  });
});
