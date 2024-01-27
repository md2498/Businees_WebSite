const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/businees_tut';

mongoose.connect(MONGODB_URI, {});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to application termination');
        process.exit(0);
    });
});

module.exports = db;
