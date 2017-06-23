import GameOverView from './gameover-view';
import welcome from './welcome';
import {changeView} from '../utils';

export default (win) => {
  const gameover = new GameOverView(win);
  gameover.onStart = () => {
    changeView(welcome());
  };

  return gameover;
};
