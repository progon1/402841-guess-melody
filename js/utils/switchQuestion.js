export default (question) => {
  const number = +question.slice(-1) + 1;

  return question.slice(0, -1) + number;
};
