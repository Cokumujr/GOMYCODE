const http = require('http');
const port = 3000;

// Create a server object and listen on port 3000.
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to this page!');
    res.end();
}).listen(port, () => { 
    console.log(`Server running at http://localhost:${port}`);
  });
