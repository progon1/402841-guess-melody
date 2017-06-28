// Выбор исполнителя: уровень
import app from '../main';
import ArtistView from './artist-view';
import GenreView from './genre-view';
import {initialState, getLevel, nextLevel, setLives} from '../data/game';
import {changeView, enableTimerLayout} from '../utils';
import isLevelOver from '../utils/isLevelOver';
import formatStats from './../utils/formatStatistics';
import stats from '../data/statistics';
import initializeCountdown from '../timer';
import timeOver from '../utils/timeOver';

export default class Game {
  constructor(question) {
    enableTimerLayout(true);
    initializeCountdown(0, initialState.dimension, initialState.time, timeOver);

    this.question = question;
  }

  init() {
    this.changeLevel(Object.assign({}, initialState, {time: 0}));
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    changeView(view);
  }

  changeLevel(state) {
    this.state = state;
    let GameView = getLevel(this.state.level, this.question).type === `artist` ? ArtistView : GenreView;
    setInterval(() => {
      this.state.time++;
    }, 1000);
    this.view = new GameView(this.state, this.question);

    this.view.onSuccess = () => {

      if (isLevelOver(this.state.level)) {
        this.win();
      } else {
        this.state = nextLevel(this.state, this.question);
        this.changeLevel(this.state);
      }
    };
    this.view.onFault = () => {

      const isLives = setLives(this.state, this.state.lives - 1).lives > 0;
      if (isLives) {
        this.state = nextLevel(setLives(this.state, this.state.lives - 1), this.question);
        this.changeLevel(this.state);
      } else {
        this.loss();
      }
    };
  }

  win() {
    enableTimerLayout(false);
    app.showStats(formatStats(stats));
  }

  loss() {
    enableTimerLayout(false);
    app.showStats();
  }
}
