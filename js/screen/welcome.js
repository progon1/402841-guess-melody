// Приветствие
import Application from '../app';
import {initialState} from '../data/game';
import WelcomeView from './welcome-view';
import {changeView, enableTimerLayout} from '../utils';
import timeOver from '../utils/timeOver';


export default () => {
  class Welcome {
    constructor() {
      this.view = new WelcomeView();
    }

    init() {
      changeView(this.view);

      this.view.onStart = () => {
        Application.showGame();
        enableTimerLayout(true);
        window.initializeCountdown(0, initialState.dimension, initialState.time, timeOver);
      };
    }
  }
  return new Welcome();
};
