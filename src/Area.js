class Area {
  constructor(input) {
    const options = {
      width: 1,
      height: 1,
      color: '#b200ff',
      rooms: [],
      name: 'Somebody forgot a name',
      ...input,
    };

    const { rooms, ...rest } = options;

    for (const [key, val] of Object.entries(rest)) {
      this[key] = val;
    }

    // Creates a 2D array of width by height
    // https://stackoverflow.com/a/49201210/754004
    this.rooms = Array.from(Array(this.width), () => new Array(this.height));

    // Assign the grid structure
    for (const room of rooms) {
      const [x, y] = room.position;

      this.rooms[x][y] = room;
    }
  }
}

export default Area;
