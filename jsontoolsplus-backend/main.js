const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

// Application Setup
const app = express();
const serverPort = process.env.PORT;
const serverUrl = 'localhost';

// Application Settings
app.use(express.static(path.join(__dirname, 'build')));
app.use(prerender.set('prerenderToken', 'wqXHMwawR81QqkPBPJwE'));

// Application routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server on specified url and port
app.listen(serverPort, serverUrl, function () {
  console.log('Application started successfully...');
  console.log(`Server can be accessed on http://${serverUrl}:${serverPort}`);
});

// Listen for errors and log them
process.on('unhandledRejection', (reason, promise) => {
  console.log(reason);
  console.log(promise);
});

process.on('uncaughtException', (reason) => {
  console.log(reason);
});
