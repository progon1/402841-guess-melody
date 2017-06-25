import app from '../app';
import isGameOver from '../utils/isGameOver';
import {enableTimerLayout} from '../utils';
import stats from './formatStatistics';


const timeOver = (passedTime) => {
  if (isGameOver(passedTime)) {
    enableTimerLayout(false);
    app.showStats(false, stats());
  }
};

export default timeOver;
