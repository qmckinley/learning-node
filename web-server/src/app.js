const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Q.McKinley'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Q.McKinley'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Q.McKinley',
    message: 'This is an example help message'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'New York',
    forecast: 'Partly Cloudy'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Response',
    name: 'Q.McKinley',
    message: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Response',
    name: 'Q.McKinley',
    message: 'Page Not Found'
  })
})

//
app.listen(3000, () => {
  console.log('Server is up on port 3000.')
});