import {initialState} from '../data/game';

const isGameOver = (passedTime) => {
  return passedTime === initialState.time * initialState.dimension;
};

export default isGameOver;
