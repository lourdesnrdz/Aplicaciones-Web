
const weather = require('./weather.js')

// weather.darksyForecast(-122.4233, 37.8267)

// weather.geocode('New York')

weather.geocode('New York', function(error, data) {
	// console.log(data)

	if(error){
		console.log(error)
	} else {
		weather.forecast(data.longitude, data.latitude, function(error, data) {
			if (error) {
				console.log(error)
			} else {
				console.log(data)
			}
		})
	}
})

// weather.geocode('Alaska', function(data) {
// 	console.log(data)
// })