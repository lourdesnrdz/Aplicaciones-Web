
const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://admin:admin@cluster0-ez21y.mongodb.net/lab7?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
	useNewUrlParser: true,
	useCreateIndex:true,	//crear indexes
	useUnifiedTopology: true
})