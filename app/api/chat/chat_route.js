// POST /api/chat/createPrivate
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Chat from "@/models/chat";

export async function POST(req) {
  await connectDB();

  try {
    const { userIds, createdBy } = await req.json();

    if (!userIds || !createdBy) return NextResponse.json({ error: "Missing data" }, { status: 400 });
    

    const newPrivateChat = new Chat({
      members: userIds,
      createdBy,
      messages: []
    });

    await newPrivateChat.save();

    return NextResponse.json({ success: true, chat: newPrivateChat }, { status: 200 });
  } catch (err) {
    console.error("Create private chat error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }}

  // app/api/chat/personalChat.js
export async function GET(req) {
  await connectDB();

  try {
    const { chatId } = await req.json();

    if (!chatId) {
      return NextResponse.json({ error: "Missing chatId" }, { status: 400 });
    }

    const chat = await Chat.findById(chatId)
      .populate("messages.sender", "name email")
      .select("messages");

    if (!chat) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, messages: chat.messages }, { status: 200 });
  } catch (err) {
    console.error("Fetch messages error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
