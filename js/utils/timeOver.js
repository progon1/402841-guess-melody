import isGameOver from '../utils/isGameOver';
import {enableTimerLayout} from '../utils';


const timeOver = (passedTime, app) => {
  if (isGameOver(passedTime)) {
    enableTimerLayout(false);
    app.showStats(false);
  }
};

export default timeOver;
