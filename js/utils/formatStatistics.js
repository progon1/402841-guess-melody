import stat from '../data/statistics';
import sort from '../utils/sortStatistics';

export default (win) => {
  const result = stat[stat.length - 1];
  const sortedStat = sort(stat);
  const position = sortedStat.findIndex((item) => {
    return item === result;
  });

  const format = {
    win,
    position: ((stat.length - (position + 1)) / stat.length) * 100
  };

  return JSON.stringify(format);
};
