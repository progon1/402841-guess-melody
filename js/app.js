import Welcome from './screen/welcome';
import Game from './screen/game';
import Stats from './screen/stats';
import Model from './model';
import guessMelodyAdapter from './data/guessMelodyAdapter';
import statsAdapter from './data/statsAdapter';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  STATS: `stats`
};

const Url = {
  READ: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`,
  STATS: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/vk402841`
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
      [ControllerID.WELCOME]: () => new Welcome(this),
      [ControllerID.GAME]: () => new Game(this.model, data, this),
      [ControllerID.STATS]: (stats) => new Stats(stats, this)
    };
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController([route = ``, stats]) {
    const controller = this.routes[route];
    controller(stats ? JSON.parse(decodeURIComponent(stats)) : ``).init();
  }

  init(app) {
    this.preloader();

    this.loadQuestions()
      .then((data) => this.setup(data, app))
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch(window.console.error);
  }

  preloader() {
    new Welcome().init();
    document.querySelector(`button`).style.display = `none`;
  }

  loadQuestions() {
    this.changeUrlRead(Url.READ);

    return this.model.load(guessMelodyAdapter);
  }

  loadStats() {
    this.changeUrlRead(Url.STATS);

    return this.model.load(statsAdapter);
  }

  changeUrlRead(url) {
    Object.defineProperty(this.model, `urlRead`, {
      configurable: true,
      get() {
        return url;
      }
    });
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
