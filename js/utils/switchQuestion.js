export default (question) => {
  const nextNumber = +question.slice(-1) + 1;
  const nextQuestion = question.slice(0, -1) + nextNumber;

  return nextQuestion;
};
