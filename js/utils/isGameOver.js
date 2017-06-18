import {initialState} from '../data/game';

const isGameOver = (passedTime) => {
  return passedTime === initialState.time * initialState.dimension ? true : false;
};

export default isGameOver;
