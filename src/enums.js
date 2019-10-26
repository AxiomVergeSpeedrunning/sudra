/*
 * This file is just to make sure we have a set of constants
 * that can be easily referenced from any JS app. The values
 * underneath can be changed as long as they're being referenced
 * properly in the calling code.
 */

const RoomTypes = {
  SAVE: 'save',
  BOSS: 'boss',
  RUSALKI: 'rusalki',
  NORMAL: 'normal',
};

const Weapons = {
  AXIOM_DISRUPTOR: 'axiom-disruptor',
  NOVA: 'nova',
  MULTI_DISRUPTOR: 'multi-disruptor',
  KILVER: 'kilver',
  HYPO_ATOMIZER: 'hypo-atomizer',
  REFLECTOR: 'reflector',
  INERTIAL_PULSE: 'inertial-pulse',
  VORANJ: 'voranj',
  SHARDS: 'shards',
  TURBINE_PULSE: 'turbine-pulse',
  QUANTUM_VARIEGATOR: 'quantum-squiggler',
  TETHERED_CHARGE: 'tethered-charge',
  DATA_BOMB: 'data-bomb',
  LIGHTNING_GUN: 'lightning-gun',
  ORBITAL_DISCHARGE: 'orbital-discharge',
  FIREWALL: 'firewall',
  ION_BEAM: 'ion-beam',
  DISTORTION_FIELD: 'distortion-field',
  REVERSE_SLICEr: 'reverse-slicer',
  FLAMETHROWER: 'flamethrower',
  // Not including the secret weapons
  //   for obvious reasons
};

const Powerups = {
  POWER_NODE: 'power-node',
  POWER_NODE_FRAGMENT: 'power-node-frag',
  HEALTH_NODE: 'health-node',
  HEALTH_NODE_FRAGMENT: 'health-node-frag',
  SIZE_NODE: 'size-node',
  RANGE_NODE: 'range-node',
};

const Notes = {
  CLAY_TABLET: 'clay-tablet',
  RUSALKA_TABLET: 'rusalka-tablet',
  DIGITAL_PAPER: 'digital-paper',
  NOTE: 'note',
};

const Upgrades = {
  LASER_DRILL: 'drill',
  ADDRESS_DISRUPTOR_1: 'ad1',
  FIELD_DISRUPTOR: 'jordans',
  MODIFIED_LAB_COAT: 'lab-coat',
  REMOTE_DRONE: 'drone',
  BIOFLUX_ACCELERATOR_1: 'bioflux-accelerator-1',
  ADDRESS_DISRUPTOR_2: 'address-disruptor-2',
  GRAPPLE: 'grapple',
  ENHANCED_DRONE_LAUNCH: 'enhanced-drone-launch',
  ADDRESS_BOMB: 'address-bomb',
  DRONE_TELEPORT: 'drone-teleport',
  PASSCODE_TOOL: 'passwords',
  SUDRAN_KEY: 'sudran-key',
  RED_COAT: 'red-coat',
  BIOFLUX_ACCELERATOR_2: 'bioflux-accelerator-2',
};

// Just making an easy collection for importing
const Items = {
  ...Weapons,
  ...Powerups,
  ...Notes,
  ...Upgrades,
};
