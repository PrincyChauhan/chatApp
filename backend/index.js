import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
