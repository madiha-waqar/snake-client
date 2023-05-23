const IP = 'localhost';
const PORT = 50541;
const PLAYER = "Name: MIM"; // Player initials by Name command

const MOVES = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  h: 'Say: Hi!',
  b: 'Say: Bye byee',
};


module.exports = { // Exporting the constants required for the snake game app
  IP,
  PORT,
  PLAYER,
  MOVES
};