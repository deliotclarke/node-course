const request = require('postman-request');
const weatherAccess = require('./weatherKey');

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weatherAccess.key}&query=${lat},${long}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    const { errorRes, current: forecast } = body;
    if (body.error) {
      callback(body.error.type);
    } else if (errorRes) {
      callback('Unable to find location');
    } else {
      callback(
        undefined,
        `It is currently ${forecast.weather_descriptions[0]}. It is ${forecast.temperature} degrees out and feels like ${forecast.feelslike} degrees.`
      );
    }
  });
};

module.exports = forecast;
