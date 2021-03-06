const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

// Serve static file from react
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;
  // Generate passwords
  const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12, false));

  res.json(passwords);
  console.log(`Sent ${count} passwords`);
})

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.port || 7000;
app.listen(port);

console.log(`Listening on port ${port}`)