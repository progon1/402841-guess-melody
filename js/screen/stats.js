import app from '../app';
import StatsView from './stats-view';
import {changeView} from '../utils';

/**
 * param {stats} Object*/
export default class Stats {
  constructor(stats) {
    this.view = new StatsView(stats.win, stats.position);
  }

  init() {
    changeView(this.view);

    this.view.onStart = () => {
      app.showWelcome();
    };
  }
}
