import sort from '../utils/sortStatistics';

export default (stats) => {
  const result = stats[stats.length - 1];
  const sortedStat = sort(stats);
  const position = sortedStat.findIndex((item) => {
    return item === result;
  });

  return Object.assign(result, {position: ((stats.length - (position + 1)) / stats.length) * 100});
};
