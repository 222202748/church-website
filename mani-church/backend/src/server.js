require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import middleware
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/contact', require('./routes/contact'));

// Error handling middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));