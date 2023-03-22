const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config;
const app = express();
const port = 3000;

// connects to
app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

// send file that is the home directory
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Recieved' });
});
app.post('/score', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Recieved' });
});

app.get('/score', (req, res) => {
  // console.log(req)
  res.send({ message: 'Hello' });
});

// listener
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
