export default (stats) => {
  return {
    title: `Вы настоящий меломан!`,
    text: `За&nbsp;${(stats.time / 60).toFixed(1)}&nbsp;минуты<br>вы&nbsp;отгадали ${stats.answers}&nbsp;мелодии<br>
    и получили ${stats.points} баллов!`,
    comparison: `Это&nbsp;лучше чем у&nbsp;${stats.position}%&nbsp;игроков`
  };
};
