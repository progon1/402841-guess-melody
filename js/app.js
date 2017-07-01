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

const Url = {
  READ: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`,
  STATS: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/402841`
};

const getControllerIDFromHash = (hash) => {
  return (hash.replace(`#`, ``).split(`=`));
};

export default class Application {
  constructor() {

    this.model = new class extends Model {
      get urlRead() {
        return Url.READ;
      }

      get urlStats() {
        return Url.STATS;
      }
    }();
  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: () => new Welcome(),
      [ControllerID.GAME]: () => new Game(this.model, data),
      [ControllerID.STATS]: (stats) => new Stats(stats)
    };
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController([route = ``, stats]) {
    const controller = this.routes[route];
    controller(stats ? JSON.parse(decodeURIComponent(stats)) : ``).init();
  }

  init() {
    this.preloader();

    this.model.load(this.model.urlRead, guessMelodyAdapter)
      .then((data) => this.setup(data))
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch(window.console.error);
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
