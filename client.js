const net = require("net"); // Importing Node.js net module to create both servers and clients
const {
  IP,
  PORT,
  PLAYER
} = require("./constants"); // Importing constants required in client.js file

const connect = () => {
  const conn = net.createConnection({ //initiating an outbound TCP connection to provided host and its port of game server
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("connect", (connect) => { // event 'connect' when a successful connection is made
    console.log("Game On!! You Are Successfully Connected To The Game Server");
    conn.write(PLAYER);
  });

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  return conn;
}

module.exports = {
  connect
};