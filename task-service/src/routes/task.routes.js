import express from "express";
import {
createTask,
getAllTask,
getTaskById,
getTaskByUserId,
updateTaskById
} from "../controller/task.controller.js";

const router = express.Router();

//create task
router.post("/create", createTask);
router.get("/", getAllTask);
router.get("/:taskId", getTaskById);
router.get("/user/:userId", getTaskByUserId);
router.put("/:taskId", updateTaskById);

export default router;
