// Приветствие
import getElementFromTemplate from './../utils/getElementFromTemplate';
import appLogo from '../components/app-logo';
import {initialState} from '../data/game';
import questionList from '../data/questions-list';
import switchNextScreen from '../utils/switchNextScreen';
import isGameOver from '../utils/isGameOver';

const gameOver = (passedTime) => {
  if (isGameOver(passedTime)) {
    switchNextScreen(`loss`);
  }
};

export default () => {
  const logoTemplate = getElementFromTemplate(appLogo);

  const content = getElementFromTemplate(`
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${initialState.time / 60} минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  `);

  const screenTemplate = getElementFromTemplate(`
    <section class="main main--welcome"></section>
`);

  const screen = screenTemplate.querySelector(`.main--welcome`);
  screen.appendChild(logoTemplate);
  screen.appendChild(content);

  const button = screenTemplate.querySelector(`button.main-play`);
  button.addEventListener(`click`, () => {
    window.sessionStorage.setItem(`currentQuestion`, initialState.question);
    window.sessionStorage.setItem(`numberOfLive`, initialState.lives);

    switchNextScreen(questionList[initialState.question].type);
    window.initializeCountdown(0, initialState.dimension, initialState.time, gameOver);
  });
  return screenTemplate;
};
