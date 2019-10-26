import RoomTypes from './enums';
import { expandArray, mkArr } from './utils';

class Room {
  constructor(input) {
    const options = {
      walls: [false], // N, E, S, W - will be expanded just like CSS properties
      doors: [false], // Same as walls
      items: [],
      x: 0, // 0-indexed offset from the top left origin
      y: 0,
      type: RoomTypes.normal,
      ...input,
    };

    const { walls, doors, ...rest } = options;

    const constructList = item => {
      if (typeof item === 'string' || item instanceof String) {
        return mkArr(item);
      }

      return expandArray(item);
    };

    this.walls = constructList(walls);
    this.doors = constructList(doors);

    for (const [key, val] of Object.entries(rest)) {
      this[key] = val;
    }
  }

  get position() {
    return [this.x, this.y];
  }
}

export default Room;
