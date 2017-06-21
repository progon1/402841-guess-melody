// Выбор исполнителя: уровень
import ArtistView from './artist-view';
import GenreView from './genre-view';
import {initialState, getLevel, nextLevel, setLives} from '../data/game';
import {changeView} from '../utils';
import isLevelOver from '../utils/isLevelOver';
import gameover from './gameover';


const changeLevel = (state) => {

  const level = getLevel(state.level).type === `artist` ? new ArtistView(state) : new GenreView(state);

  level.onSuccess = () => {

    if (isLevelOver(state.level)) {
      changeView(gameover(true));
    } else {
      changeView(changeLevel(nextLevel(state)));
      window.initializeCountdown(window.nextStep, initialState.dimension, initialState.time);
    }
  };
  level.onFault = () => {

    const isLives = setLives(state, state.lives - 1).lives > 0;
    if (isLives) {
      changeView(changeLevel(nextLevel(setLives(state, state.lives - 1))));
      window.initializeCountdown(window.nextStep, initialState.dimension, initialState.time);
    } else {
      changeView(gameover(false));
    }
  };

  return level;
};

export default () => changeLevel(initialState);
