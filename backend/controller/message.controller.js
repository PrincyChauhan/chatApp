import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socketIO/server.js";

import multer from "multer"; // Import multer for file handling

const storage = multer.memoryStorage(); // Store images in memory or use diskStorage for saving files
const upload = multer({ storage });

export const sendMessage = async (req, res) => {
  try {
    const { messages } = req.body;
    const image = req.file; // Get the uploaded image

    if (!messages && !image) {
      return res.status(400).json({ error: "Message or image is required" });
    }

    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      messages: messages || "", // Use an empty string if no text message
      image: image ? image.buffer.toString("base64") : null, // Store image as base64 (or save to a database)
    });

    conversation.messages.push(newMessage._id);
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json({ newMessage, message: "Message sent successfully" });
  } catch (error) {
    console.log("Error in sendMessage", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const sendMessage = async (req, res) => {
//   try {
//     const { messages } = req.body;
//     console.log(messages, "----------------message");

//     if (!messages || messages.trim() === "") {
//       return res.status(400).json({ error: "Message cannot be empty" });
//     }

//     const { id: receiverId } = req.params;
//     console.log(receiverId, "----------------receiverId");
//     const senderId = req.user._id; // current logged in user

//     console.log(senderId, "----------------senderId");
//     let conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] },
//     });
//     if (!conversation) {
//       conversation = await Conversation.create({
//         participants: [senderId, receiverId],
//       });
//     }
//     const newMessage = new Message({
//       senderId,
//       receiverId,
//       messages,
//     });
//     if (newMessage) {
//       conversation.messages.push(newMessage._id);
//     }
//     // await conversation.save()
//     // await newMessage.save();
//     await Promise.all([conversation.save(), newMessage.save()]); // run parallel
//     const receiverSocketId = getReceiverSocketId(receiverId);
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newMessage", newMessage);
//     }
//     res.status(201).json({ newMessage, message: "Message sent successfully" });
//   } catch (error) {
//     console.log("Error in sendMessage", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    console.log(chatUser, "----------------chatUser");
    const senderId = req.user._id;
    console.log(senderId, "----------------senderId");

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatUser] },
    }).populate("messages"); // populate messages field with Message documents

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    const messages = conversation.messages;
    res.status(200).json({ messages });
  } catch (error) {
    console.log("Message getting error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
