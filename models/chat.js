// models/chat.js
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatSchema = new mongoose.Schema(
  {
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    societyId: { type: mongoose.Schema.Types.ObjectId, ref: "Society" }, // for group chats related to a society
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    messages: [MessageSchema],
    type: {
      type: String,
      enum: ["group", "private"],
      required: true,
    },},
  { timestamps: true });

const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
export default Chat;
