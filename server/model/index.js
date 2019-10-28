'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_articles', {
  useNewUrlParser: true, 
});

const connection = mongoose.connection

connection.on('open', () => console.log('Mongoose DB server is running!'));

module.exports = mongoose;