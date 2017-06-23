import AbstractView from '../view';
import {initialState} from '../data/game';
import appLogo from '../components/app-logo';

export default class WelcomeView extends AbstractView {
  get template() {
    return `
    <section class="main main--welcome">
      ${appLogo}
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;${initialState.time / 60} минуты дать
        максимальное количество правильных ответов.<br>
        Удачи!
      </p>
    </section>
    `.trim();
  }

  bind() {
    const button = this.element.querySelector(`button.main-play`);
    button.addEventListener(`click`, () => {
      this.onStart();
    });
  }

  onStart() {}
}
