import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    // get msg, receiverId from params, senderId protectRoute from middleware
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // check if they have conversation history
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    // if not, create the conversation collection
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    // create new message collection
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    // if created, push it to the conversation (only references)
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // save into db
    await Promise.all([conversation.save(), newMessage.save()]);

    // socket
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // used to send event to specific client, here 'receiversocketid'
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // if successful, send through 201
    res.status(201).json({ newMessage });
  } catch (error) {
    console.log(error.message, "In Send Message Controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    // get receiverId from params, senderId from middleware.
    const { id: userToChatwith } = req.params;
    const senderId = req.user._id;
    // populate all messages, using the references
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatwith],
      },
    }).populate("messages");
    // if no conversation, return empty array
    if (!conversation) {
      return res.status(200).json([]);
    }
    // else send through 200
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log(error.message, "In Get Messages Controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
