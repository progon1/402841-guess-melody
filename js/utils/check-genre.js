export default (inputs, data) => {

  return inputs.every((input) => {
    if (data.currentGenre === input.value) {
      return input.checked;
    } else {
      return !input.checked;
    }
  });
};
