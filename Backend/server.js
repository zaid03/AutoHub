require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Test route
app.get('/', (req, res) => res.send('AutoHub backend running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));