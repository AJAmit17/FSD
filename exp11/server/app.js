const express = require("express");
const mongoose = require("mongoose");
const Task = require("./taskModel");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = "mongodb://127.0.0.1:27017/taskmanagerdb";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(_id);

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.send({ message: "Task deleted successfully", deletedTask: task });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
