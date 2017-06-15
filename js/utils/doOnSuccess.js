import questionList from '../data/questions-list';
import switchNextScreen from '../utils/switchNextScreen';
import switchQuestion from '../utils/switchQuestion';
import isQuestionOver from './../utils/isQuestionOver';

export default () => {
  const currentQuestion = window.sessionStorage.getItem(`currentQuestion`);
  const nextQuestion = switchQuestion(currentQuestion);
  window.sessionStorage.setItem(`currentQuestion`, nextQuestion);
  const result = isQuestionOver(currentQuestion) ?
    `win` : questionList[nextQuestion].type;

  switchNextScreen(result);
};
