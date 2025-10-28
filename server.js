require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Task Manager API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
