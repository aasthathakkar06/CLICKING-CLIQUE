import{NextResponse} from "next/server";
import Society from "@/models/society";
import connectDB from "@/lib/mongodb";
import { connect } from "mongoose";

export async function POST(req){
    try{
        await connectDB();
        const body = await req.json();
        const { name, description, category,location, createdBy } = body;

        if(!name || !createdBy){
            return NextResponse.json({error : "Missing required fileds"},{status : 400});
        }

        const newSociety = await Society.create({
            name,
            description,
            category,
            location, 
            createdBy,
            members: [createdBy], //creator is the first member 
        });

        return NextResponse.json(newSociety,{status : 201});
    } catch(err){
        console.error(err);
        return NextResponse.json({error: "Server Error"}, {status: 500});
    }
}

export async function GET() {
    await connectDB();
  
    try {
      const societies = await Society.find().populate("members", "name email"); // Optional: populate user info
      return NextResponse.json({ success: true, societies });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ success: false, error: "Failed to fetch societies" }, { status: 500 });
    }
}