const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint for registration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  // Add logic to handle registration, e.g., save to a database
  console.log('User registered:', { username, password });
  res.json({ message: 'User registered successfully' });
});

// All other requests should return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
