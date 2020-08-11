const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Cloudy with a chance of global pandemic',
    location: 'Like the whole world',
  });
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
