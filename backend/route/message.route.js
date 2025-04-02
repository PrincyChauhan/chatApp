import express from "express";
import { sendMessage, getMessage } from "../controller/message.controller.js";
import secureRoute from "../middleware/secureRoute.js";
// import upload from "../middleware/upload.js";
import multer from "multer";
const storage = multer.memoryStorage(); // Store file in memory as a buffer
const upload = multer({ storage });

const router = express.Router();

router.post("/send/:id", secureRoute, upload.single("image"), sendMessage);
router.get("/get/:id", secureRoute, getMessage);

export default router;
