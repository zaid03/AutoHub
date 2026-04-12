require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('AutoHub backend running'));

//to route for brands
const brandRoutes = require('./routes/brands');
app.use('/api/brands', brandRoutes);

//to route for models
const modelRoutes = require('./routes/models');
app.use('/api/models', modelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));