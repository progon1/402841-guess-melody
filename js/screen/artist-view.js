import AbstractView from '../view';
import {getLevel} from '../data/game';
import player from '../components/player';
import artistList from '../components/artist-list';

let level;

export default class ArtistView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    level = getLevel(this.state.level);

    return `
    <section class="main main--level main--level-artist">

      <div class="main-wrap">
        <div class="main-timer"></div>

        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        ${player}
        <form class="main-list">
          ${artistList(level.options)}
        </form>
      </div>
    </section>
    `.trim();
  }

  bind() {
    const container = this.element.querySelector(`.main-list`);
    container.addEventListener(`click`, (evt) => {

      if (evt.target.classList.contains(`main-answer-r`)) {
        if (level.answer.toLowerCase() === evt.target.getAttribute(`value`)) {

          this.onSuccess();

        } else {
          this.onFault();
        }
      }
    });
    const playerWrapper = this.element.querySelector(`.player-wrapper`);
    window.initializePlayer(playerWrapper, `tracks/${level.trackName}`, true);
  }

  onSuccess() {}
  onFault() {}
}
