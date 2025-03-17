import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  const mongoURI = process.env.DB || "mongodb+srv://apavas:d3TC3Kvw107z3Yx2@inventarios-db.n0fnhug.mongodb.net/task-db?retryWrites=true&w=majority";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(mongoURI, options);
    console.log("Connection established sucessfully");
    console.log("Connected to: ", mongoURI);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

export { connect };
