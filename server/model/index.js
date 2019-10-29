'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articles_db', {
   useNewUrlParser: true, 
   useUnifiedTopology: true
  }, (err) => {
  if (err) return console.log(err); // eslint-disable-line no-console
});

mongoose.connection.on('open', () => console.log('Mongoose DB server is running!'));

module.exports = mongoose;