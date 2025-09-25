require('dotenv').config();

const appConfig = {
	env: process.env.NODE_ENV || 'development',
	port: Number(process.env.PORT || 3000)
};

const mongoConfig = {
	uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/my_database'
};

module.exports = { appConfig, mongoConfig };


