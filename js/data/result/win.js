import stat from '../statistics';

export default Object.freeze({
  title: `Вы настоящий меломан!`,
  text: `За&nbsp;${(stat[stat.length - 1].time / 60).toFixed(1)}&nbsp;минуты<br>вы&nbsp;отгадали ${stat[stat.length - 1].answers}&nbsp;мелодии`,
  comparison: `Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`
});
