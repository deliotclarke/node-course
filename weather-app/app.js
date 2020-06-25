const request = require('postman-request');
const weatherAccess = require('./weatherKey');
const locationAccess = require('./locationKey');

const location = '37.8267,-122.4233';

const locationUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/nashville.json?access_token=${locationAccess.key}&limit=1`;

const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherAccess.key}&query=${location}&units=f`;

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const forecast = response.body.current;
    console.log(
      `It is currently ${forecast.temperature} degrees out. It is ${forecast.weather_descriptions[0]} with ${forecast.precip}% chance of rain.`
    );
  }
});

request({ url: locationUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Sorry! Unable to connect to location service!');
  } else if (response.body.message) {
    console.log('Unable to geocode');
  } else if (response.body.features.length === 0) {
    console.log('No matching results');
  } else {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
