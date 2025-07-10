require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import middleware
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

// Import routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const blogRoutes = require('./routes/blog');
const contactRoutes = require('./routes/contact');
const eventRegistrationRoutes = require('./routes/eventRegistrationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mani-church')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', auth, eventRoutes);
app.use('/api/blog', auth, blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/eventregistration', eventRegistrationRoutes); // Public route for registrations
app.use('/api/admin/eventregistration', auth, eventRegistrationRoutes); // Protected admin route

// Error handler
app.use(errorHandler);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
