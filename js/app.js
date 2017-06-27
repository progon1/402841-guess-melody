import Welcome from './screen/welcome';
import Game from './screen/game';
import Stats from './screen/stats';


const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  STATS: `stats`
};

const getControllerIDFromHash = (hash) => {

  return (hash.replace(`#`, ``).split(`=`));
};

class Application {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GAME]: Game,
      [ControllerID.STATS]: Stats
    };
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController([route = ``, stats]) {
    const Controller = this.routes[route];
    if (Controller === Stats) {
      new Controller(JSON.parse(stats)).init();
    } else {
      new Controller().init();
    }
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showStats(stats) {
    location.hash = `${ControllerID.STATS}=${stats}`;
  }
}

const app = new Application();

export default app;
