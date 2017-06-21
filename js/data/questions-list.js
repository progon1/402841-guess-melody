import songOptions from './songs';
import genreOptions from './genre';

const questionsList = Object.freeze({
  'question-1': {
    description: `Кто исполняет эту песню?`,
    type: `artist`,
    trackName: songOptions.trackName,
    options: songOptions.options,
    answer: songOptions.trackArtist
  },
  'question-2': {
    description: `Выберите инди-рок треки`,
    type: `genre`,
    options: genreOptions.tracks,
    answer: genreOptions.currentGenre
  },
  'question-3': {
    description: `Кто исполняет эту песню?`,
    type: `artist`,
    trackName: songOptions.trackName,
    options: songOptions.options,
    answer: songOptions.trackArtist
  },
  'question-4': {
    description: `Выберите поп треки`,
    type: `genre`,
    options: genreOptions.tracks,
    answer: genreOptions.currentGenre
  },
  'question-5': {
    description: `Кто исполняет эту песню?`,
    type: `artist`,
    trackName: songOptions.trackName,
    options: songOptions.options,
    answer: songOptions.trackArtist
  },
  'question-6': {
    description: `Выберите джаз треки`,
    type: `genre`,
    options: genreOptions.tracks,
    answer: genreOptions.currentGenre
  },
  'question-7': {
    description: `Кто исполняет эту песню?`,
    type: `artist`,
    trackName: songOptions.trackName,
    options: songOptions.options,
    answer: songOptions.trackArtist
  },
  'question-8': {
    description: `Выберите рэгги треки`,
    type: `genre`,
    options: genreOptions.tracks,
    answer: genreOptions.currentGenre
  },
  'question-9': {
    description: `Кто исполняет эту песню?`,
    type: `artist`,
    trackName: songOptions.trackName,
    options: songOptions.options,
    answer: songOptions.trackArtist
  },
  'question-10': {
    description: `Выберите хард-рок треки`,
    type: `genre`,
    options: genreOptions.tracks,
    answer: genreOptions.currentGenre
  }
});

export default questionsList;
