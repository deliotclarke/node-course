const http = require('http');
const weatherAccess = require('../weather-app/utils/weatherKey');

const url = `http://api.weatherstack.com/current?access_key=${weatherAccess.key}&query=45,-75&units=f`;

const request = http.request(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('an error', error);
});

request.end();
