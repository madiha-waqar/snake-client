const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "172.18.74.140 ",
    port: 50541
  });
  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });
  
  return conn;
}

module.exports = {connect}