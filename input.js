const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY
} = require("./constants"); // ES6 shorthand sytnax

let connection;
const HELLO = "Say: Hi!";
const BYE = "Say: Bye byeee!";

const handleUserInput = (key) => {
  if (key === '\u0003') { // CTRL + C
    console.log("Exiting Now!\n");
    process.exit();
  };

  if (key === 'H' || key === 'h') {
    connection.write(HELLO);
  };

  if (key === 'B' || key === 'b') {
    connection.write(BYE);
  };

  if (key === 'W' || key === 'w') {
    connection.write("Say: UP ^ ");
    connection.write(MOVE_UP_KEY); // Server is sent move command Move: up
  };

  if (key === 'S' || key === 's') {
    connection.write("Say: DOWN ");
    connection.write(MOVE_DOWN_KEY);
  };

  if (key === 'A' || key === 'a') {
    connection.write("Say: LEFT < ");
    connection.write(MOVE_LEFT_KEY);
  };

  if (key === 'D' || key === 'd') {
    connection.write("Say: RIGHT > ");
    connection.write(MOVE_RIGHT_KEY);
  };

};

const setupInput = (conn) => { // function is taking connection object to interact with server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8"); // interpret incoming data as text
  stdin.resume();
  stdin.on("data", handleUserInput); // Event listener on stdin
  return stdin;
};

module.exports = {
  setupInput
};