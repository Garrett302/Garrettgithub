const express = require('express');
const path = require('path');
const app = express();
const port = 5000; // You can change this to 5000 if needed

// Serve the static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all GET requests to serve the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
