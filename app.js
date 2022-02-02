const express = require('express');
const app = express();
const fs = require('fs');
const videoPath = 'video.mp4';
const videoSize = fs.statSync('video.mp4').size;
const CHUNK_SIZE = 10 ** 6; //1MB
const start = Number(range.replace(/\D/g, ''));
const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send('Requires Range Header');
  }
  const videoPath = 'video.mp4';
  const videoSize = fs.statSync('video.mp4').size;
});

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
