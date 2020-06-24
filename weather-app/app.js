const request = require('postman-request');
const access = require('./weatherKey');

const url = `http://api.weatherstack.com/current?access_key=${access.key}&query=37.8267,-122.4233`;

request({ url }, (error, response) => {
  const parsedData = JSON.parse(response.body);
  console.log(parsedData.current);
});
