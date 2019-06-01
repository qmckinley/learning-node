const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address as your 3rd argument');
} else {
  geocode(address, (err, { longitude, latitude, location }) => {
    if (err) {
      return console.log(err)
    }
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error) 
      }
      console.log(location)
      console.log(forecastData)
    })
  })
};



