const { connect } = require('./client'); // Import the connect function from client.js

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // Register the event listener for stdin
  return stdin;
};

const handleUserInput = function (key) {
  // Check for the Ctrl + C input to terminate the game
  if (key === '\u0003') {
    process.exit();
  }
  // Additional key handling logic can be added here
};

console.log("Connecting ...");
connect(); // Invoke the connect function to establish the connection

setupInput(); // Call setupInput
