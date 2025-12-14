const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
