'use strict';

const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  hits: {
    type: String, 
    required: true
  }, 
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;