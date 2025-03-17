import cors from "cors";
import express from "express";
import { connect } from "./config/database.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();
app.use(cors());

//Middleware
app.use(express.json());
connect();

app.get("/", (req, res) => {
  res.json("funcion");
});

app.use("/task", taskRoutes);

export default app;
