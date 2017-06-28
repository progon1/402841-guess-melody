// Приветствие
import app from '../main';
import WelcomeView from './welcome-view';
import {changeView, enableTimerLayout} from '../utils';


export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    changeView(this.view);
    enableTimerLayout(false);

    this.view.onStart = () => {
      app.showGame();
    };
  }
}
