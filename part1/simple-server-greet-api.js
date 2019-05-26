// Importing http module to create a server.
const http = require('http');
const url = require('url');

// Host for our server.
const HOST = 'localhost';

// Port at which our server will run/listen.
const PORT = 3000;

const onGreetRequest = (req, res) => {
  const { method, url: reqUrl } = req;
  const urlParts = url.parse(reqUrl, true);
  if (method === 'GET') {
    const { query: queryParams } = urlParts;
    res.end(`Hello ${queryParams.name || 'Stranger'}!`);
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
};

const onRequest = (req, res) => {
  if (req.url.startsWith('/greet')) {
    onGreetRequest(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
};

// Creating a server with handler.
const server = http.createServer(onRequest);

// Setup server at PORT.
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
