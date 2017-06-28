// Приветствие
import app from '../main';
import {initialState} from '../data/game';
import WelcomeView from './welcome-view';
import {changeView, enableTimerLayout} from '../utils';
import timeOver from '../utils/timeOver';
import initializeCountdown from '../timer';


export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    changeView(this.view);
    enableTimerLayout(false);

    this.view.onStart = () => {
      app.showGame();
      enableTimerLayout(true);
      initializeCountdown(0, initialState.dimension, initialState.time, timeOver);
    };
  }
}
