import ArtistView from './artistView';
import GenreView from './genreView';
import {initialState, getLevel, nextLevel, setLives} from '../data/game';
import {changeView, enableTimerLayout} from '../utils';
import isLevelOver from '../utils/isLevelOver';
import formatStats from './../utils/formatStatistics';
import initializeCountdown from '../timer';
import timeOver from '../utils/timeOver';
import statsAdapter from '../data/statsAdapter';

export default class Game {
  constructor(model, question, app) {
    this.app = app;
    enableTimerLayout(true);
    this.stopCountdown = initializeCountdown(0, initialState.dimension, initialState.time, () => timeOver(app));
    this.timerID = setInterval(() => {
      this.state.time++;
    }, initialState.dimension);

    this.model = model;
    this.question = question;
  }

  init() {
    this.changeLevel(Object.assign({}, initialState, {time: 0, points: 0, answers: 0}));
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    changeView(view);
  }

  changeLevel(state) {
    let levelTimer = 0;
    this.state = state;
    let GameView = getLevel(this.state.level, this.question).type === `artist` ? ArtistView : GenreView;
    this.levelTimerID = setInterval(() => {
      levelTimer++;
    }, initialState.dimension);
    this.view = new GameView(this.state, this.question);

    this.view.onSuccess = () => {
      this.state.points += levelTimer < 10 ? 2 : 1;
      this.state.answers += 1;

      if (isLevelOver(this.state.level)) {
        this.stopCountdown();
        clearInterval(this.timerID);
        clearInterval(this.levelTimerID);
        this.win();
      } else {
        this.state = nextLevel(this.state, this.question);
        this.changeLevel(this.state);
      }
    };
    this.view.onFault = () => {

      const isLives = setLives(this.state, this.state.lives - 1).lives > 0;
      if (isLives && !isLevelOver(this.state.level)) {
        this.state = nextLevel(setLives(this.state, this.state.lives - 1), this.question);
        this.changeLevel(this.state);
      } else {
        this.stopCountdown();
        clearInterval(this.timerID);
        clearInterval(this.levelTimerID);
        this.loss();
      }
    };
  }

  win() {
    this.model.send(this.state, statsAdapter)
      .then(this.app.loadStats.bind(this.app))
      .then((data) => {
        enableTimerLayout(false);
        this.app.showStats(formatStats(data, this.state.points));
      });
  }

  loss() {
    enableTimerLayout(false);
    this.app.showStats();
  }
}
