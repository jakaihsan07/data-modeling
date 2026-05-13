const express = require("express");
const User = require("../models/user.model");
const Task = require("../models/task.model");

const router = express.Router();

// Create User
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User berhasil dibuat",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Gagal membuat user",
      error: error.message,
    });
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "Data user berhasil diambil",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil user",
      error: error.message,
    });
  }
});

// Create Task
router.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      message: "Task berhasil dibuat",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      message: "Gagal membuat task",
      error: error.message,
    });
  }
});

// Get All Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      message: "Data task berhasil diambil",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil task",
      error: error.message,
    });
  }
});

// Get Tasks With User Data
router.get("/tasks/populate", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");

    res.status(200).json({
      message: "Data task dengan user berhasil diambil",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil task populate",
      error: error.message,
    });
  }
});

module.exports = router;