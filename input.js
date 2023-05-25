const { MOVES } = require("./constants"); // ES6 shorthand sytnax

let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') { // CTRL + C
    console.log("Exiting Now!\n");
    process.exit();
  };

  if (MOVES[key]) { // Server is sent keyboard input command
    connection.write(MOVES[key]);
  }
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