import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    // array of user objectids
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // reference user model
      },
    ],
    // array of message objectids
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // reference message model
        default: [], // defaults to empty
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
