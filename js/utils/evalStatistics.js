import stat from '../data/statistics';
import sort from '../utils/sortStatistics';

export default () => {
  const result = stat[stat.length - 1];
  const sortedStat = sort(stat);
  const position = sortedStat.findIndex((item) => {
    return item === result;
  });

  return ((stat.length - (position + 1)) / stat.length) * 100;
};
