export default (inputs, answer) => {

  return inputs.every((input) => {
    if (answer === input.value) {
      return input.checked;
    } else {
      return !input.checked;
    }
  });
};
