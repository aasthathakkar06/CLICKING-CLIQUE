// GET /api/chat/getChats
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Chat from "@/models/chat";

export async function GET(req) {
  await connectDB();

  try {
    const { userId } = await req.json();

    if (!userId)return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  
    const chats = await Chat.find({ members: userId }).populate("members", "name email");

    if (!chats.length) return NextResponse.json({ error: "No chats found" }, { status: 404 });


    return NextResponse.json({ success: true, chats }, { status: 200 });
  } catch (err) {
    console.error("Get chats error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }}
