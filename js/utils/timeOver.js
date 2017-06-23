import Application from '../app';
import isGameOver from '../utils/isGameOver';
import {enableTimerLayout} from '../utils';
import stats from './../utils/evalStatistics';


const timeOver = (passedTime) => {
  if (isGameOver(passedTime)) {
    enableTimerLayout(false);
    Application.showStats(false, stats());
  }
};

export default timeOver;
