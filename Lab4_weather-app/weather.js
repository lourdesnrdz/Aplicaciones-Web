
const credentials = require('./credentials.js')

const request = require('request')

const darksyForecast = function (longitude, latitude) {
	const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude

	request({url, json:true}, function(error, response) {
		const data = response.body

		// Error:  null
		// DATOS:  { code: 400, error: 'Poorly formatted request' }

		// console.log('Error: ', error)
		// console.log('DATOS: ', data)

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
		}

		console.log(info)
	})
}

const geocode = function(ciudad, callback) {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + ciudad + '.json?access_token=' + credentials.MAPBOX_TOKEN
	
	request({url, json:true}, function(error, response) {
		const data = response.body

		// console.log('Error: ', error)
		// console.log('DATOS: ', data)

		const info = {
				place_name: data.features[0].place_name,
				longitude: data.features[0].geometry.coordinates[0],
				latitude: data.features[0].geometry.coordinates[1]
		}

		console.log(info)
		
		darksyForecast(info.longitude, info.latitude)
	})
}

module.exports = {
	darksyForecast : darksyForecast,
	geocode : geocode
}