const Task = require("../models/task.model");
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.uid }).populate("user");
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(400).json({ message: "task not found" });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.uid,
    });
    const taskSaved = await newTask.save();
    res.status(201).json(taskSaved);
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(400).json({ message: "task not found" });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(400).json({ message: "task not found" });
    res.status(200).json({ message: "task deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
