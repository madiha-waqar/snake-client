const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.18.74.140 ",
    port: 50541
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled")
  });

  conn.setEncoding("utf8");
  return conn;
};

console.log("Connected to server! ...")
connect();

