const sort = (arr) => {
  const tmp = arr.slice();

  tmp.sort((a, b) => {
    return a.answers - b.answers ? b.answers - a.answers : a.time - b.time;
  });

  return tmp;
};

export default sort;
