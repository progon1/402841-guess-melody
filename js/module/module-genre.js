// Игра на выбор жанра
import getElementFromTemplate from '../getElementFromTemplate';
import showScreen from './../showScreen';
import winResult from './module-win-result';
import lossResult from './module-loss-result';
const option = [winResult, lossResult];

const genre = getElementFromTemplate(`
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);
const button = genre.querySelector(`button.genre-answer-send`);
button.disabled = true;
const answers = genre.querySelectorAll(`input`);
answers.find = Array.prototype.find;

const container = genre.querySelector(`.genre`);

container.addEventListener(`change`, (evt) => {
  if (evt.target.nodeName === `INPUT`) {
    const isChecked = answers.find((item) => {
      return item.checked;
    });
    if (isChecked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
});

button.addEventListener(`click`, () => {
  showScreen(option[Math.floor(Math.random() * 2)]);
});

export default genre;
