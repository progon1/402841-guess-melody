export const initialState = Object.freeze({
  level: 1,
  lives: 3,
  time: 120,
  dimension: 1000,
  MAX_LEVEL: 10
});

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  game = Object.assign({}, game);
  game.lives = lives;
  return game;
};

export const getLevel = (num, question) => question[`question-${num}`];

export const nextLevel = (state, question) => {
  const next = state.level + 1;
  if (!getLevel(next, question)) {
    throw new RangeError(`Can't find level ${next}`);
  }
  state = Object.assign({}, state);
  state.level = next;
  return state;
};
