import cors from "cors";
import express from "express";
import { connect } from "./config/database.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());

//Middleware
app.use(express.json());
connect();

app.get("/", (req, res) => {
  res.json("funcion");
});

app.use("/user", userRoutes);

export default app;
