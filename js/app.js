import welcomeScreen from './screen/welcome';
import gameScreen from './screen/game';
import statsScreen from './screen/stats';


export default class Application {

  static showWelcome() {
    welcomeScreen().init();
  }

  static showGame() {
    gameScreen().init();
  }

  static showStats(win, stats) {
    statsScreen(win, stats).init();
  }
}
