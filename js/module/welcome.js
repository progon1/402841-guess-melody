// Приветствие
import {initialState} from '../data/game';
import isGameOver from '../utils/isGameOver';
import WelcomeView from './welcome-view';
import startGame from './game';
import {changeView} from '../utils';
import gameover from './gameover';

const gameOver = (passedTime) => {
  if (isGameOver(passedTime)) {
    changeView(gameover(false));
  }
};

export default () => {
  const welcome = new WelcomeView();
  welcome.onStart = () => {
    changeView(startGame());
    window.initializeCountdown(0, initialState.dimension, initialState.time, gameOver);
  };
  return welcome;
};
