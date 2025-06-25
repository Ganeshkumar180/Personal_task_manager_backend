
const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const authMiddleware = require('../middleware/authMiddleware');

// All task routes are protected
router.get('/', authMiddleware, getTasks);  
router.post('/', authMiddleware, createTask);        // Create task
         // Get tasks (with optional filters)
router.put('/:id', authMiddleware, updateTask);      // Update task by ID
router.delete('/:id', authMiddleware, deleteTask);   // Delete task by ID

module.exports = router;
