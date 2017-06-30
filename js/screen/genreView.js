import AbstractView from '../view';
import genreList from '../components/genreList';
import {getLevel} from '../data/game';
import isAllCheckedCorrectly from '../utils/checkGenre';
import initializePlayer from '../player';

let level;

export default class GenreView extends AbstractView {
  constructor(state, model) {
    super();
    this.state = state;
    this.model = model;
  }

  get template() {
    level = getLevel(this.state.level, this.model);

    return `
    <section class="main main--level main--level-genre">

    <div class="main-wrap">
      <h2 class="title">${level.question}</h2>
      <form class="genre">
        ${genreList(level)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>
    `.trim();
  }

  bind() {
    const button = this.element.querySelector(`button.genre-answer-send`);
    button.disabled = true;
    const inputs = [...this.element.querySelectorAll(`input[name="answer"]`)];
    const answers = this.element.querySelectorAll(`input`);
    answers.find = Array.prototype.find;

    const container = this.element.querySelector(`.genre`);

    container.addEventListener(`change`, (evt) => {

      if (evt.target.nodeName === `INPUT`) {
        const isChecked = answers.find((item) => {
          return item.checked;
        });

        button.disabled = !isChecked;
      }
    });

    container.addEventListener(`submit`, (evt) => {
      evt.preventDefault();

      if (isAllCheckedCorrectly(inputs, level.genre)) {

        this.onSuccess();

      } else {
        this.onFault();
      }
    });

    const players = [...this.element.querySelectorAll(`.player-wrapper`)];
    players.forEach((player, index) => {
      initializePlayer(player, `${level.answers[index].src}`);
    });
  }

  onSuccess() {}
  onFault() {}
}
