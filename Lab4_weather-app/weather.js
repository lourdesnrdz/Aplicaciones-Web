
const credentials = require('./credentials.js')

const request = require('request')

const darksyForecast = function (longitude, latitude) {
	const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '?&units=si'

	request({url, json:true}, function(error, response) {
		const data = response.body

		// Error:  null
		// DATOS:  { code: 400, error: 'Poorly formatted request' }

		// console.log('Error: ', error)
		// console.log('DATOS: ', data)

		if (data.error) {
			console.log(data.error)
		}
		else {
			const info = {
				timezone: data.timezone,
				summary: data.currently.summary,
				precipProbability: data.currently.precipProbability * 100 + '%',
				hourly: data.hourly.summary,
				daily: data.daily.summary,
				temperature: data.currently.temperature
			}

			if (data.currently.precipProbability){
				info.precipType = data.currently.precipType
			} else {
				info.precipType = 'precipitation'
			}


			const weather = info.summary + '. The temperature is ' + info.temperature + '°C. There is ' + info.precipProbability + ' of ' + info.precipType + '. ' + info.hourly + ' ' + info.daily

			console.log(weather)
		}

		
		// console.log(info)
		
	})
}

const geocode = function(ciudad, callback) {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + ciudad + '.json?access_token=' + credentials.MAPBOX_TOKEN
	
	request({url, json:true}, function(error, response) {
		const data = response.body

		// Error:  null
		// DATOS:  { message: 'Not Found' }

		// console.log('Error: ', error)
		// console.log('DATOS: ', data)

		if (data.message) {
			console.log(data.message)
		} else {
			const info = {
				place_name: data.features[0].place_name,
				longitude: data.features[0].center[0],
				latitude: data.features[0].center[1]
			}

			//console.log(info)
			
			darksyForecast(info.longitude, info.latitude)
		}
	})
}

module.exports = {
	darksyForecast : darksyForecast,
	geocode : geocode
}