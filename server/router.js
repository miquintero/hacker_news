'use strict';

const express =  require('express');
const router = express.Router();

const controller = require('./controller/articles');

router.get('/articles', controller.getArticles);

module.exports = router;