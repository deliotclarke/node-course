const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hello from exxxxxxxpresssssss!');
});

app.get('/help', (req, res) => {
  res.send('HELP!');
});

app.get('/about', (req, res) => {
  res.send("It's ABOUT time.");
});

app.get('/weather', (req, res) => {
  res.send('Cloudy with a chance of global pandemic.');
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
