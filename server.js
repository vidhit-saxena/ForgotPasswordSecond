require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passwordRoutes = require('./routes/passwordRoutes');
const connectDB = require('./config/db');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api', passwordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
