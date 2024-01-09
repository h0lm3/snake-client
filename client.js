const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.18.153.89', 
    port: 50541, 
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("end", () => {
    console.log("Disconnected from the server");
  });

  return conn;
};

module.exports = { connect };
