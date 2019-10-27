import Room from '../../Room';
import Items from '../../enums';

const rooms = [
  new Room({
    x: 13,
    items: [Items.HEALTH_NODE],
    walls: 'new',
  }),
  new Room({
    x: 13,
    y: 1,
    walls: 'ew',
    doors: 's',
  }),
  new Room({
    x: 13,
    y: 2,
    walls: 'ew',
    doors: 'n',
  }),
  new Room({
    x: 13,
    y: 3,
    walls: 'ew',
    doors: 's',
  }),
  new Room({
    x: 13,
    y: 3,
    walls: 'ew',
    doors: 'ns',
  }),
  new Room({
    x: 3,
    y: 1,
    walls: 'nw',
    doors: 'e',
  }),
  new Room({
    x: 4,
    y: 1,
    walls: 'ns',
    doors: 'w',
  }),
  new Room({
    x: 5,
    y: 1,
    walls: 'ns',
  }),
  new Room({
    x: 6,
    y: 1,
    walls: 'nse',
  }),
  new Room({
    x: 7,
    y: 1,
    walls: 'nwe',
  }),
  new Room({
    x: 7,
    y: 2,
    walls: 'ew',
    doors: 's',
  }),
  new Room({
    x: 3,
    y: 2,
    walls: 'ew',
  }),
  new Room({
    x: 3,
    y: 3,
    walls: 'sw',
    doors: 'e',
  }),
  new Room({
    x: 4,
    y: 3,
    walls: 'ns',
  }),
  new Room({
    x: 5,
    y: 3,
    walls: 'ns',
    items: [Items.POWER_NODE_FRAGMENT],
  }),
  new Room({
    x: 6,
    y: 3,
    walls: 'ns',
    doors: 'e',
  }),
  new Room({
    x: 7,
    y: 3,
    doors: 'nw',
  }),
  new Room({
    x: 8,
    y: 3,
    walls: 'ne',
    items: [Items.MULTI_DISRUPTOR],
  }),
  new Room({
    x: 7,
    y: 4,
    walls: 'sw',
  }),
  new Room({
    x: 8,
    y: 4,
    walls: 's',
    doors: 'e',
  }),
  new Room({
    x: 9,
    y: 4,
    walls: 'ns',
    doors: 'ew',
  }),
  new Room({
    x: 10,
    y: 4,
    walls: 'ne',
    doors: 'w',
  }),
  new Room({
    x: 15,
    y: 2,
    walls: 'nwe',
    items: [Items.NOVA],
  }),
  new Room({
    x: 15,
    y: 3,
    walls: 'ew',
    doors: 's',
  }),
  new Room({
    x: 15,
    y: 4,
    walls: 'ew',
    doors: 'ns',
  }),
  new Room({
    x: 15,
    y: 5,
    walls: 'es',
    doors: 'n',
  }),
  new Room({
    x: 7,
    y: 5,
    walls: 'nws',
    items: [Items.SIZE_NODE],
  }),
  new Room({
    x: 8,
    y: 5,
    walls: 'ns',
  }),
  new Room({
    x: 9,
    y: 5,
    walls: 'ns',
    doors: 'e',
  }),
  new Room({
    x: 10,
    y: 5,
    doors: 'ew',
  }),
  new Room({
    x: 11,
    y: 5,
    walls: 'ns',
    doors: 'w',
  }),
  new Room({
    x: 12,
    y: 5,
    walls: 'ns',
  }),
  new Room({
    x: 13,
    y: 5,
    walls: 's',
    doors: 'n',
  }),
  new Room({
    x: 14,
    y: 5,
    walls: 'ns',
  }),
];

export default rooms;
