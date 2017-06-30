import assert from 'assert';
import isAllCheckedCorrectly from '../utils/checkGenre';

const testGenre = {
  currentGenre: `indie-rock`
};
const testData = [
  {value: `indie-rock`, checked: true},
  {value: `indie-rock`, checked: true}
];


describe(`Checking genre answer`, () => {
  it(`should return true when every correct track was selected`, () => {
    assert(isAllCheckedCorrectly(testData, testGenre.currentGenre));
  });

  it(`should returns false when only some correct tracks was selected`, () => {
    const arrTmp = testData.slice();
    arrTmp.push({value: `indie-rock`, checked: false});
    assert.equal(isAllCheckedCorrectly(arrTmp, testData), false);
  });

  it(`shouls returns false when some incorect tracks was selected`, () => {
    const arrTmp = testData.slice();
    arrTmp.push({value: `jazz`, checked: true});
    assert.equal(isAllCheckedCorrectly(arrTmp, testData), false);
  });
});
