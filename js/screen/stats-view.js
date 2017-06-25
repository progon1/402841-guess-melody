import AbstractView from '../view';
import appLogo from '../components/app-logo';
import win from '../data/result/win';
import loss from '../data/result/loss';


export default class StatsView extends AbstractView {
  constructor(isWin, stats) {
    super();
    this.isWin = isWin;
    this.stats = stats;
  }

  get template() {
    const message = this.isWin ? win : loss;

    return `
    <section class="main main--result">
      ${appLogo}
      <h2 class="title">${message.title}</h2>
      <div class="main-stat">${message.text}</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.stats}%&nbsp;игроков</span>
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
