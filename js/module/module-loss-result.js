// Неудачный результат игры
import getElementFromTemplate from '../getElementFromTemplate';
import showScreen from './../showScreen';
import welcom from './module-welcome';

const lossResult = getElementFromTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const playAgain = lossResult.querySelector(`span.main-replay`);
playAgain.addEventListener(`click`, () => {
  showScreen(welcom);
});

export default lossResult;
