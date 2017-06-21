import AbstractView from '../view';
import genreList from '../components/genre-list';
import {getLevel} from '../data/game';
import isAllCheckedCorrectly from '../utils/check-genre';
import timer from '../components/timer';

let level;

export default class GenreView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    level = getLevel(this.state.level);

    return `
    <section class="main main--level main--level-genre">
    ${timer}
    <div class="main-wrap">
      <h2 class="title">${level.description}</h2>
      <form class="genre">
        ${genreList(level.options)}
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

      if (isAllCheckedCorrectly(inputs, level.answer)) {

        this.onSuccess();

      } else {
        this.onFault();
      }
    });


    const players = [...this.element.querySelectorAll(`.player-wrapper`)];
    players.forEach((player, index) => {
      window.initializePlayer(player, `tracks/${level.options[index].trackName}`);
    });
  }

  onSuccess() {}
  onFault() {}
  onAnswer(answer) {
    return answer;
  }
}
