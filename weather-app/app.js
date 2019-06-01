const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (err, res) => {
  console.log('Error', err)
  console.log('Data', res)
})

forecast(-73.9808, 40.7648, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})