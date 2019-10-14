
const weather = require('./weather.js')

// weather.forecast(-122.4233, 37.8267, function(error, data) {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(data)
// 	}
// })

weather.geocode('New York', function(error, data) {
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

