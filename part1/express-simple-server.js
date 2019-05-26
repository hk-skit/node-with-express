// Importing express module.
const express = require('express');

// Port at which our server will listen.
const PORT = 3001;

// Creating an express app.
const app = express();

// Setting up request handler also known as middleware
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Conent-Type', 'text/plain');
  res.send('Hello Stranger!!');
});

// Setup server at PORT.
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
