const request = require('request');

// const darkSkyKey = '132e425ff0ab07b9a1628ddf825b0780'
// const mapBoxKey = 'pk.eyJ1IjoicS1tY2tpbmxleSIsImEiOiJjandjcjc1cGwwNjE0NDRucDJscHMyOWhoIn0.nM7YCGugwFoM1XjR9ilpjw'

const darkSkyUrl = 'https://api.darksky.net/forecast/132e425ff0ab07b9a1628ddf825b0780/37.8267,-122.4233'

request({ url: darkSkyUrl, json: true }, (err, res) => {
  if (err) {
    console.log('Unable to connect to weather service.');
  } else if (res.body.error) {
    console.log('Unable to find location.');
  } else {
    const { temperature, precipProbability } = res.body.currently;
    const { summary } = res.body.daily.data[0];
    console.log(`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
  }
})

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicS1tY2tpbmxleSIsImEiOiJjandjcjc1cGwwNjE0NDRucDJscHMyOWhoIn0.nM7YCGugwFoM1XjR9ilpjw&limit=1'

request({ url: mapBoxUrl, json: true }, (err, res) => {
  if (err) {
    console.log('Unable to connect to location services.')
  } else if (res.body.features.length === 0) {
    console.log('Could not find a match to your location. Try a different search.')
  } else {
    const { center } = res.body.features[0];
    const latitude = center[1];
    const longitude = center[0];
    console.log(`Longitude: ${longitude} Latitude: ${latitude}`);
  }
})