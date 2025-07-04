import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import valueRoute from "./routes/value.route.js";
const Server = express();
dotenv.config();

Server.use(express.json());

Server.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://192.168.0.186:5173",  // Changez ici
      "http://192.168.0.186:5174",  // Changez ici
    ],
    credentials: true,
  })
);
Server.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Server accessible at http://192.168.0.186:${process.env.PORT}`); // Changez ici
});
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected successfully");
});

Server.use("/api/value", valueRoute);
