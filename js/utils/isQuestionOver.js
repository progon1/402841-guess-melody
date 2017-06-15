export default (question) => {
  return +question.match(/\d+/)[0] === 10;
};
