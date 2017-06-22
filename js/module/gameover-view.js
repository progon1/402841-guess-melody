import AbstractView from '../view';
import appLogo from '../components/app-logo';
import win from '../data/result/win';
import loss from '../data/result/loss';
import stat from './../utils/evalStatistics';


export default class GameOverView extends AbstractView {
  constructor(isWin) {
    super();
    this.isWin = isWin;
  }

  get template() {
    const message = this.isWin ? win : loss;

    return `
    <section class="main main--result">
      ${appLogo}
      <h2 class="title">${message.title}</h2>
      <div class="main-stat">${message.text}</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${stat()}%&nbsp;игроков</span>
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
