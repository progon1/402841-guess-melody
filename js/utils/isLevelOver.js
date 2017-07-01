import {initialState} from '../data/game';
const MAX_LEVEL = initialState.MAX_LEVEL;

export default (level) => {
  return level >= MAX_LEVEL;
};
