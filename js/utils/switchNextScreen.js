import showScreen from './showScreen';
import artistModule from '../module/module-artist';
import genreModule from '../module/module-genre';
import resultModule from '../module/module-result';
import songs from '../data/songs';
import genre from '../data/genre';
import win from '../data/result/win';
import loss from '../data/result/loss';


export default (screen) => {
  switch (screen) {
    case `artist`:
      showScreen(artistModule(songs));
      break;
    case `genre`:
      showScreen(genreModule(genre));
      break;
    case `win`:
      showScreen(resultModule(win));
      break;
    case `loss`:
      showScreen(resultModule(loss));
      break;
  }
};
