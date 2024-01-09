const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ 
    host: '172.18.153.89', // Replace with the server's IP
    port: 50541, // Replace with your server's port
  });

  conn.setEncoding("utf8");

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send the "Name" command to the server
    conn.write("Name: SNK"); // Replace 'SNK' with your initials or chosen name
  });

  // Event handler for receiving data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event handler for connection end
  conn.on("end", () => {
    console.log("Disconnected from the server");
  });

  return conn;
};

module.exports = { connect };
