import dotenv from "dotenv";

dotenv.config();
export default {
  PORT: process.env.PORT || 4000,
  SECRET: process.env.SECRET || "$2a$12$AwfuFO/3sROx8V2iFZPRqOvPqY/si8Qeg0iiQ1GQy7I5xkGC6L9S2",
};



