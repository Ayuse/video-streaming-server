const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
