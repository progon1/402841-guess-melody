// Выбор исполнителя: уровень
import app from '../app';
import ArtistView from './artist-view';
import GenreView from './genre-view';
import {initialState, getLevel, nextLevel, setLives} from '../data/game';
import {changeView, enableTimerLayout} from '../utils';
import isLevelOver from '../utils/isLevelOver';
import formatStats from './../utils/formatStatistics';
import stats from '../data/statistics';

export default class Game {
  constructor(state = Object.assign({}, initialState, {time: 0})) {
    const GameView = getLevel(state.level).type === `artist` ? ArtistView : GenreView;
    this.state = state;
    setInterval(() => {
      this.state.time++;
    }, 1000);
    this.view = new GameView(this.state);
  }

  init() {
    changeView(this.view);

    this.view.onSuccess = () => {

      if (isLevelOver(this.state.level)) {
        enableTimerLayout(false);
        app.showStats(formatStats(stats));
      } else {
        this.state = nextLevel(this.state);
        const GameView = getLevel(this.state.level).type === `artist` ? ArtistView : GenreView;
        this.view = new GameView(this.state);
        this.init();
      }
    };
    this.view.onFault = () => {

      const isLives = setLives(this.state, this.state.lives - 1).lives > 0;
      if (isLives) {
        this.state = nextLevel(setLives(this.state, this.state.lives - 1));
        const GameView = getLevel(this.state.level).type === `artist` ? ArtistView : GenreView;
        this.view = new GameView(this.state);

        this.init();
      } else {
        enableTimerLayout(false);
        app.showStats();
      }
    };
  }
}
