import AbstractView from '../view';
import appLogo from '../components/appLogo';
import win from '../data/result/win';
import loss from '../data/result/loss';


export default class StatsView extends AbstractView {
  constructor(stats) {
    super();
    this.stats = stats;
  }

  get template() {
    const message = this.stats ? win(this.stats) : loss;

    return `
    <section class="main main--result">
      ${appLogo}
      <h2 class="title">${message.title}</h2>
      <div class="main-stat">${message.text}</div>
      <span class="main-comparison">${message.comparison ? message.comparison : ``}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`.trim();
  }

  bind() {
    const playAgain = this.element.querySelector(`span.main-replay`);
    playAgain.addEventListener(`click`, () => {
      this.onStart();
    });
  }

  onStart() {}
}
