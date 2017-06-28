import app from '../main';
import StatsView from './stats-view';
import {changeView} from '../utils';

/**
 * param {stats} Object*/
export default class Stats {
  constructor(stats) {
    this.view = stats ? new StatsView(stats) : new StatsView();
  }

  init() {
    changeView(this.view);

    this.view.onStart = () => {
      app.showWelcome();
    };
  }
}
