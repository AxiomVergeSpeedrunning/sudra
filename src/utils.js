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
      return arr;
  }
};

export default { expandArray, friendlyName };
