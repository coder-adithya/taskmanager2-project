const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

// Create a new task
router.post('/tasks', createTask);

// Get all tasks
router.get('/tasks', getTasks);

// Update a task by ID
router.put('/tasks/:id', updateTask);

// Delete a task by ID
router.delete('/tasks/:id', deleteTask);

module.exports = router;
