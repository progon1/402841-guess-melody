// Выбор исполнителя: уровень
import getElementFromTemplate from '../utils/getElementFromTemplate';
import artistList from '../components/artist-list';
import timer from '../components/timer';
import {initialState, currentState} from '../data/game';
import player from '../components/player';
import doOnSuccess from '../utils/doOnSuccess';
import doOnFault from '../utils/doOnFault';

export default (data) => {
  const artistTemplate = `
  <section class="main main--level main--level-artist">
    ${timer}

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
        console.log(currentState.nextStep);
        doOnSuccess();

      } else {
        doOnFault();
      }
    }
  });

  const playerWrapper = artist.querySelector(`.player-wrapper`);
  window.initializePlayer(playerWrapper, `tracks/${data.trackName}`, true);

  return artist;
};
