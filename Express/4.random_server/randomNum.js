const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1; 
  res.json({ random: randomNum });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Random Number Server is running on http://localhost:${PORT}`);
});
