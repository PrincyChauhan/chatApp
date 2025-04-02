import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import { server, app } from "./socketIO/server.js";
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4001",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

ConnectDB();
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Code for Deployment

if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("./frontend/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./frontend/dist", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
