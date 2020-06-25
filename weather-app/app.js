const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const command = process.argv[2];

if (command !== undefined) {
  geocode(command, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log('Please enter a location');
}
