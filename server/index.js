'use strict';

const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');

const router =  require('./router');

app.use(cors());
app.use(express.json());
app.use(router);
       
app.listen(port, (err) => {
  if (err) return console.log(err); // eslint-disable-line no-console
  console.log(`Server listening on port ${port}!`); //eslint-disable-line no-console 
});