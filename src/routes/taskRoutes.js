const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

// Render all tasks
router.get('/', taskController.renderTasksView);

// Render the create task form
router.get('/create', (req, res) => {
  res.render('create');
});

// Handle the creation of a new task
router.post('/create', taskController.createTask);

// Render the update task form
router.get('/update/:taskId', taskController.renderUpdateForm);

// Handle the update of an existing task
router.put('/update/:taskId', taskController.updateTask);

// Render the delete task confirmation form
router.get('/delete/:taskId', taskController.renderDeleteForm);

// Handle the deletion of an existing task
router.delete('/delete/:taskId', taskController.deleteTask);

// Use res.render to render the "welcome" view
router.get('/welcome', (req, res) => {
  res.render('welcome');
});

// Get a task by ID
router.get('/:taskId', taskController.getTaskById);

module.exports = router;
