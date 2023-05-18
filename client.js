const net = require("net");
const { setupInput } = require('./input.js');

const connect = () => {
  const conn = net.createConnection({
    host: "172.18.74.140 ",
    port: 50541
  });

  conn.on("connect", (connect) => {
    console.log("Game On!! You Are Successfully Connected To The Game Server");
    conn.write("Name: ABC");
  });

  conn.on("connect", (connect) => {
    setTimeout(() => {
      conn.write( "Move: up");
      }, 2000);
    });

  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  return conn;
}

module.exports = { connect };