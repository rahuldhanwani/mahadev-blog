const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS and images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample quotes data
const quotes = [
  "Om Namah Shivaya",
  "Har Har Mahadev",
  "Shiva is the only truth.",
  "The one who meditates on Shiva is blessed with peace."
];

// Define the home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define the route to fetch quotes as JSON
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://3.109.60.137:${PORT}`);
});
