// Приветствие
import getElementFromTemplate from './../getElementFromTemplate';
import showScreen from './../showScreen';
import artist from './module-artist';

const welcome = getElementFromTemplate(`
<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`);

const button = welcome.querySelector(`button.main-play`);
button.addEventListener(`click`, () => {
  showScreen(artist);
});

export default welcome;
