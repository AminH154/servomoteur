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
    origin: "http://localhost:5174",
    credentials: true,
  })
);
Server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected successfully");
});

Server.use("/api/value", valueRoute);
