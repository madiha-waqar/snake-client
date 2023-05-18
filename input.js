let connection;
const hello = "Hi!";
const bye = "Bye byeee!";

const handleUserInput = (key) => {
  if (key === 'W' || key === 'w') {
    connection.write("Say: UP ^ ");
    connection.write("Move: up");
  };

  if (key === 'A' || key === 'a') {
    connection.write("Say: LEFT < ");
    connection.write("Move: left");
  };

  if (key === 'S' || key === 's') {
    connection.write("Say: DOWN ");
    connection.write("Move: down");
  };

  if (key === 'D' || key === 'd') {
    connection.write("Say: RIGHT > ");
    connection.write("Move: right");
  };

  if (key === "H" || key === 'h') {
    connection.write("Say: hello");
  };
  if (key === "B" || key === 'b') {
    connection.write("Say: bye");
  };

  if (key === '\u0003') {  // CTRL + C
    console.log("Existing Now!\n");
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