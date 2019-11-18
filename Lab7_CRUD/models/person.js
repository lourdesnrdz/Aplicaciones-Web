
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true,
	},
	born: {
		type: Number,
		required: true,
	},
	timeline: {
		type: String,
		required: true,
	},
	alliegance: [String],
	playedBy: {
		type: String
	}, 
	titles: [String],
	father: {
		type: String
	},
	mother: {
		type: String
	},
	spouse: {
		type: String
	}
})

const Person = mongoose.model('Person', userSchema)

module.exports = Person