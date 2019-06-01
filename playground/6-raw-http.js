const https = require('https');
const key = '132e425ff0ab07b9a1628ddf825b0780';
const url = `https://api.darksky.net/forecast/${key}/40,-70`

const request = https.request(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (err) => {
  console.log('An error', err);
});

request.end();