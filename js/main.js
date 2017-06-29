import Welcome from './screen/welcome';
import Game from './screen/game';
import Stats from './screen/stats';
import Model from './model';
import guessMelodyAdapter from './data/guessMelodyAdapter';


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
    this.preloader();

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
      }
    }();

    this.model.load(guessMelodyAdapter)
      .then((data) => this.setup(data))
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch(window.console.error);
  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: () => new Welcome(),
      [ControllerID.GAME]: () => new Game(data),
      [ControllerID.STATS]: (stats) => new Stats(stats)
    };
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController([route = ``, stats]) {
    const controller = this.routes[route];
    if (stats) {
      controller(JSON.parse(decodeURIComponent(stats))).init();
    } else {
      controller().init();
    }
  }

  preloader() {
    new Welcome().init();
    document.querySelector(`button`).style.display = `none`;
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showStats(stats) {
    location.hash = stats ? `${ControllerID.STATS}=${encodeURIComponent(JSON.stringify(stats))}` : `${ControllerID.STATS}`;
  }
}

const app = new Application();

export default app;
