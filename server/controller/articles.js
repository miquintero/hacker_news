'use strict';

const request = require('request');

const Article = require('../model/article.js');

exports.getArticles = async(req, res) => {
  await request('https://hn.algolia.com/api/v1/search_by_date?query=nodejs', 
  (error, response, body) => {
      console.log('statusCode:', response && response.statusCode); //eslint-disable-line no-console 
      const saved = Article({hits: body});
      saved.save();
      if (response.statusCode === 200) res.send(body);
      if (error) console.log('error', error && response.statusCode); //eslint-disable-line no-console
  })
};