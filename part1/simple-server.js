// Importing http module to create a server.
const http = require('http');

// Host for our server.
const HOST = 'localhost';

// Port at which our server will run/listen.
const PORT = 3000;

// Creating a server with handler.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Stranger!!');
});

// Setup server at PORT.
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});