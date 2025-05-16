const express = require('express');
const app = express();

// Render বা অন্য environment থেকে PORT নেবে, না থাকলে 3000 নেবে
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from my API server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
