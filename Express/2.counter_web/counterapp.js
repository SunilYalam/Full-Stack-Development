const express = require('express');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter });
});

app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

const PORT = 3032;

app.listen(PORT, () => {
  console.log(`Counter Web is running on http://localhost:${PORT}`);
});
