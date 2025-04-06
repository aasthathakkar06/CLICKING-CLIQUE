// GET /api/society/createdByUser
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Society from "@/models/society";

export async function GET(req) {
  await connectDB();

  try {
    const { userId } = await req.json();

    if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

    const societies = await Society.find({ createdBy: userId }).populate("members", "name email");

    if (!societies.length) return NextResponse.json({ error: "No societies found" }, { status: 404 });


    return NextResponse.json({ success: true, societies }, { status: 200 });
  } catch (err) {
    console.error("Get societies created by user error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }}
