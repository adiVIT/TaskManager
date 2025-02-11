const Task = require('../models/Task');


const renderTasksView = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('tasks', { tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
  
      if (tasks.length === 0) {
        res.json({ message: "No tasks found. You can create a new task." });
      } else {
        res.json(tasks);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
   
    const task = await Task.findById(req.params.taskId);
   
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const renderUpdateForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.render('update', { task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const renderDeleteForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.render('delete', { task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  renderDeleteForm,
  renderUpdateForm,
  renderTasksView,
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};