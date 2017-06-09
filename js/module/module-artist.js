// Выбор исполнителя: уровень
import getElementFromTemplate from '../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import genreScreen from './module-genre';
import resultScreen from './module-result';
import artistList from '../components/artist-list';
import timer from '../components/timer';
import game from '../data/game';
import lossResult from '../data/result/loss';
import player from '../components/player';
import genre from '../data/genre';

export default (data) => {
  const artistTemplate = `
<section class="main main--level main--level-artist">
    ${timer(game.time)}

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      ${player}
      <form class="main-list">
        ${artistList(data.songs)}
      </form>
    </div>
  </section>
`;

  const artist = getElementFromTemplate(artistTemplate);

  const container = artist.querySelector(`.main-list`);
  container.addEventListener(`click`, (evt) => {

    if (evt.target.classList.contains(`main-answer-r`)) {
      if (data.trackArtist.toLowerCase() === evt.target.getAttribute(`value`)) {
        showScreen(genreScreen(genre));
      } else {
        showScreen(resultScreen(lossResult));
      }
    }

  });

  const playerWrapper = artist.querySelector(`.player-wrapper`);
  window.initializePlayer(playerWrapper, `tracks/${data.trackName}`);

  return artist;
};
