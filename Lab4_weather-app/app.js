
const weather = require('./weather.js')

weather.darksyForecast(-122.4233, 37.8267)

weather.geocode('Monterrey', function(data) {
	console.log(data)
})