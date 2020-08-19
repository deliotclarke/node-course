const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'It is your dad.',
    name: 'Eliot Clarke',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: "It's ABOUT time, y'all!",
    name: 'Todd Toddington',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: "You friggin' need help, dawg.",
  });
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
