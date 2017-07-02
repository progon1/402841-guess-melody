import WelcomeView from './welcome-view';
import {changeView, enableTimerLayout} from '../utils';


export default class Welcome {
  constructor(app) {
    this.view = new WelcomeView();
    this.app = app;
  }

  init() {
    changeView(this.view);
    enableTimerLayout(false);

    this.view.onStart = () => {
      this.app.showGame();
    };
  }
}
