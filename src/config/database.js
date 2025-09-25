const mongoose = require('mongoose');
const { mongoConfig } = require('./index');

mongoose.set('strictQuery', true);

async function connectToDatabase() {
	try {
		await mongoose.connect(mongoConfig.uri);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
}

module.exports = { connectToDatabase };


