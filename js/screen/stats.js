import app from '../main';
import StatsView from './statsView';
import {changeView} from '../utils';

/**
 * param {Object} stats*/
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
