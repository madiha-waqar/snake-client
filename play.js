const { connect } = require('./client.js')

console.log("Connecting ...")
connect();

let key = 0;
const handleUserInput = function (key) {
  // you'll specify what happens when "data:" 
  //is received from stdin... in other words, 
  // what happens when a particular key is pressed 
  //on the keyboard input.
  if (key === '\u0003') {
    console.log("Existing Now!");
    process.exit();
  };
}

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput); // Event listener on stdin
    //handleUserInput is registered as "data" callback handler for stdin.
    return stdin;
  };

  setupInput();