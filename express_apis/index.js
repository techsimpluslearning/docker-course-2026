
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send('Hello, From Express Application!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
