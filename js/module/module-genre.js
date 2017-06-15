// Игра на выбор жанра
import getElementFromTemplate from '../utils/getElementFromTemplate';
// import showScreen from './../utils/showScreen';
// import winResult from '../data/result/win';
// import lossResult from '../data/result/loss';
import genreList from '../components/genre-list';
// import result from './module-result';
import isAllCheckedCorrectly from '../utils/check-genre';
import isQuestionOver from './../utils/isQuestionOver';
import switchNextScreen from './../utils/switchNextScreen';
import switchQuestion from './../utils/switchQuestion';
import questionList from '../data/questions-list';

export default (data) => {
  const genre = getElementFromTemplate(`
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите ${data.currentGenreName} треки</h2>
    <form class="genre">
      ${genreList(data.tracks)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);
  const button = genre.querySelector(`button.genre-answer-send`);
  button.disabled = true;
  const inputs = [...genre.querySelectorAll(`input[name="answer"]`)];
  const answers = genre.querySelectorAll(`input`);
  answers.find = Array.prototype.find;

  const container = genre.querySelector(`.genre`);

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

    if (isAllCheckedCorrectly(inputs, data)) {
      const currentQuestion = window.sessionStorage.getItem(`currentQuestion`);
      const nextQuestion = switchQuestion(currentQuestion);
      window.sessionStorage.setItem(`currentQuestion`, nextQuestion);
      const result = isQuestionOver(currentQuestion) ?
        `win` : questionList[nextQuestion].type;

      switchNextScreen(result);
    } else {
      switchNextScreen(`loss`);
    }
  });


  const players = [...genre.querySelectorAll(`.player-wrapper`)];
  players.forEach((player, index) => {
    window.initializePlayer(player, `tracks/${data.tracks[index].trackName}`);
  });

  return genre;
};
