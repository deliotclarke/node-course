const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

// example for serving/rendering a dynamic page
app.get('', (req, res) => {
  res.render('index', {
    title: 'Welcome to Weather',
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
    title: 'Halp',
    name: 'Bob Newhart',
    message: "You friggin' need help, dawg.",
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Cloudy with a chance of global pandemic',
    location: 'Like the whole world',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'lolo404olol',
    name: 'Jaoquin Phoenix',
    message: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'lolo404olol',
    name: 'Don Quixote',
    message: 'Sorry we could not find your page.',
  });
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
