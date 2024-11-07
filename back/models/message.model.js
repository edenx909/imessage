import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // objectid of sender
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // references user model
      required: true,
    },
    // objectid of receiver
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // references user model
      required: true,
    },
    // msg content as string
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
