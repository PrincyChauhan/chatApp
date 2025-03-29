import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import { server, app } from "./socketIO/server.js";
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
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

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
