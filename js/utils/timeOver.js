import isGameOver from '../utils/isGameOver';
import {enableTimerLayout} from '../utils';
import App from '../app';


const timeOver = (passedTime) => {
  if (isGameOver(passedTime)) {
    enableTimerLayout(false);
    new App().showStats(false);
  }
};

export default timeOver;
