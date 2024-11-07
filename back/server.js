import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToDb from "./db/connectToDb.js";

import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("server running");
});

server.listen(PORT, () => {
  connectToDb();
  console.log(`running on ${PORT}`);
});
