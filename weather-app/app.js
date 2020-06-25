const request = require('postman-request');
const access = require('./weatherKey');

const location = '37.8267,-122.4233';

const url = `http://api.weatherstack.com/current?access_key=${access.key}&query=${location}&units=f`;

request({ url, json: true }, (error, response) => {
  const forecast = response.body.current;
  console.log(
    `It is currently ${forecast.temperature} degrees out. It is ${forecast.weather_descriptions[0]} with ${forecast.precip}% chance of rain.`
  );
});
