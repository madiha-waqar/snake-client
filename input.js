let connection;

const handleUserInput = (key) => {
  if (key === 'W' || key === 'w') {
    console.log("Moving up ^ ");
    connection.write("Move: up");
  };

  if (key === 'A' || key === 'a') {
    console.log("Moving left < ");
    connection.write("Move: left");
  };

  if (key === 'S' || key === 's') {
    console.log("Moving down ");
    connection.write("Move: down");
  };

  if (key === 'D' || key === 'd') {
    console.log("Moving right > ");
    connection.write("Move: right");
  };

  if (key === '\u0003') {  // CTRL + C
    console.log("Existing Now!");
    process.exit();
  };
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // Event listener on stdin
  //handleUserInput is registered as "data" callback handler for stdin.
  return stdin;
};

module.exports = { setupInput };