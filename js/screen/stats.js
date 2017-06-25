import Application from '../app';
import StatsView from './stats-view';
import {changeView} from '../utils';

export default (win, stats) => {

  class Stats {
    constructor(winParam, statsParam) {
      this.view = new StatsView(winParam, statsParam);
    }

    init() {
      changeView(this.view);

      this.view.onStart = () => {
        Application.showWelcome();
      };
    }
  }
  return new Stats(win, stats);
};
