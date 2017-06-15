import questionList from '../data/questions-list';
import switchNextScreen from '../utils/switchNextScreen';
import switchQuestion from '../utils/switchQuestion';
import reduceLives from '../utils/reduceLives';


export default () => {
  const currentLives = reduceLives(window.sessionStorage.getItem(`numberOfLive`));

  if (currentLives) {
    window.sessionStorage.setItem(`numberOfLive`, currentLives);

    const nextQuestion = switchQuestion(window.sessionStorage.getItem(`currentQuestion`));
    window.sessionStorage.setItem(`currentQuestion`, nextQuestion);
    switchNextScreen(questionList[nextQuestion].type);
  } else {
    switchNextScreen(`loss`);
  }
};
