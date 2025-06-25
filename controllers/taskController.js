const Task = require('../models/Task');

// ✅ Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      status,
      user: req.userId, // From authMiddleware
    });

    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

// ✅ Get all tasks (with optional filters)
exports.getTasks = async (req, res) => {
  const { status, priority, sortBy } = req.query;
  const query = { user: req.userId };

  if (status) query.status = status;
  if (priority) query.priority = priority;

  try {
    let tasks = await Task.find(query);

    // 🔁 Sort logic
    if (sortBy === 'priority') {
      const order = { High: 1, Medium: 2, Low: 3 };
      tasks.sort((a, b) => order[a.priority] - order[b.priority]);
    } else if (sortBy === 'dueDate') {
      tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else {
      tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // default
    }

    res.json({ success: true, data: tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

// ✅ Update a task (inline editing)
exports.updateTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: taskId, user: req.userId },
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

// ✅ Delete a task
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findOneAndDelete({
      _id: taskId,
      user: req.userId,
    });

    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ success: true, message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};
