import StatsView from './statsView';
import {changeView} from '../utils';

/**
 * param {Object} stats*/
export default class Stats {
  constructor(stats, app) {
    this.view = stats ? new StatsView(stats) : new StatsView();
    this.app = app;
  }

  init() {
    changeView(this.view);

    this.view.onStart = () => {
      this.app.showWelcome();
    };
  }
}
