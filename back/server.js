import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToDb from "./db/connectToDb.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(PORT, () => {
  connectToDb();
  console.log(`running on ${PORT}`);
});
