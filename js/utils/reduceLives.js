export default (state) => {
  return Object.assign({}, state, {lives: state.lives - 1});
};
