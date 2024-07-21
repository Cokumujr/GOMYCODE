
// Import the required modules
const fs = require('fs');

// Create a file named "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and data written');

  // Read the data from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
