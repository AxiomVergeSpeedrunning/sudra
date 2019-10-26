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
];

export default rooms;
