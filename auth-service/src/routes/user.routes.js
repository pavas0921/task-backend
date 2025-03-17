import express from "express";
import {
  createUser,
  login
} from "../controller/user.controller.js";

const router = express.Router();

//create user
router.post("/", createUser);
router.post("/login", login);

export default router;
