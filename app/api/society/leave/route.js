// POST /api/society/leave
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Society from "@/models/society";

export async function POST(req) {
  await connectDB();

  try {const { societyId, userId } = await req.json();
    if (!societyId || !userId) {
      return NextResponse.json({ error: "Missing societyId or userId" }, { status: 400 });}

    // Remove user from society
    const updatedSociety = await Society.findByIdAndUpdate(
      societyId,
      { $pull: { members: userId } }, // removes user from the members array
      { new: true }
    ).populate("members", "name email");

    if (!updatedSociety) return NextResponse.json({ error: "Society not found" }, { status: 404 });

    return NextResponse.json({ success: true, society: updatedSociety }, { status: 200 });
  } catch (err) {
    console.error("Leave society error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }}
