import _ from 'lodash';

const friendlyName = (dict, key) => _.startCase(_.lowerCase(_.invert(dict)[key]));

const expandArray = arr => {
  switch (arr.length) {
    case 0:
      return Array.from(Array(4), () => false);
    case 1:
      return Array.from(Array(4), () => arr[0]);
    case 2:
      return [...arr, ...arr];
    case 3:
      return [...arr, arr[1]];
    default:
      return [...arr];
  }
};

const mkArr = str => {
  const t = str.toLowerCase();

  return [t.includes('n'), t.includes('e'), t.includes('s'), t.includes('w')];
};

export { expandArray, friendlyName, mkArr };
