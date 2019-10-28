'use strict';

const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  'hits': [{}]
});

module.exports = mongoose.model('article', ArticleSchema);

