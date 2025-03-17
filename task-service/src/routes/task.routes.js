import express from "express";
import {
  createTask,
  getAllTask,
  getTaskById,
  getTaskByUserId,
  updateTaskById,
  deleteTaskById,
} from "../controller/task.controller.js";

const router = express.Router();

//create task
router.post("/create", createTask);
router.get("/", getAllTask);
router.get("/:taskId", getTaskById);
router.get("/user/:userId", getTaskByUserId);
router.put("/:taskId", updateTaskById);
router.delete("/:taskId", deleteTaskById);

export default router;
