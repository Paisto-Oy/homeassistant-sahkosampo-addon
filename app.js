// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 9467;

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Home Assistant Node.js Addon!');
});

// Start server
app.listen(port, () => {
    console.log(`Addon is running on port ${port}`);
});