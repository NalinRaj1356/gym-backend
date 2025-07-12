// Load environment variables from .env file
require('dotenv').config();

console.log('🌍 MONGO_URI:', process.env.MONGO_URI);  // Debug log

// The rest of your code...

// Import packages
const express = require('express');      // Web framework for APIs
const mongoose = require('mongoose');    // MongoDB ORM
const cors = require('cors');            // Enable cross-origin requests

const authRoutes = require('./routes/authRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();

// Middleware to parse JSON bodies (req.body)
app.use(express.json());

// Enable CORS so frontend (localhost:3000) can talk to backend (localhost:5000)
app.use(cors());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);

// Start server on PORT or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
