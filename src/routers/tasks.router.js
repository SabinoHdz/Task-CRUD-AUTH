const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const { validateToken } = require("../middlewares/validateToken");
const router = express.Router();
router.get("/", validateToken, getTasks);
router.get("/:id", validateToken, getTask);
router.post("/", validateToken, createTask);
router.put("/:id", validateToken, updateTask);
router.delete("/:id", validateToken, deleteTask);

module.exports = router;
