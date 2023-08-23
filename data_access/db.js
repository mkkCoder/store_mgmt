const mongoose = require('mongoose');

const mongoURI = 'mongodb://mongo:27017';


const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB connection opened');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

exports.mongoURI = mongoURI;


