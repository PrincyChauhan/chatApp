import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: {
      type: String,
      required: true,
      maxlength: 10000,
      trim: true,
      validate: [
        {
          validator: (value) => value.length > 0,
          message: "Message can not be empty",
        },
      ],
    },
    image: {
      type: String, // Store image URL
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
