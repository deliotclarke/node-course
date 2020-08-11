const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<title>It sure is WEATHER outside!</title>');
});

app.get('/help', (req, res) => {
  res.send('HELP!');
});

app.get('/about', (req, res) => {
  res.send("<h1>It's ABOUT time.</h1>");
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Cloudy with a chance of global pandemic',
    location: 'Like the whole world',
  });
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
