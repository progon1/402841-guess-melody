import question from './questions-list';

export const initialState = {
  level: 1,
  lives: 3,
  time: 120,
  dimension: 1000
};

export const currentState = {
  passedTime: 0,
  _nextStep: 0,

  get nextStep() {
    return this._nextStep;
  },
  set nextStep(next) {
    this._nextStep = next;
  }
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  game = Object.assign({}, game);
  game.lives = lives;
  return game;
};

export const getLevel = (num) => question[`question-${num}`];

export const nextLevel = (state) => {
  const next = state.level + 1;
  if (!getLevel(next)) {
    throw new RangeError(`Can't find level ${next}`);
  }
  state = Object.assign({}, state);
  state.level = next;
  return state;
};
