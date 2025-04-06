import { NextResponse } from "next/server";
import Society from "@/models/society";
import connectDB from "@/lib/mongodb";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { id } = context.params;
    const society = await Society.findById(id).populate("members", "name email");

    if (!society) {
      return NextResponse.json({ success: false, error: "Society not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, society }, { status: 200 });
  } catch (err) {
    console.error("GET Society by ID error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}


export async function PUT(req,{params}){
    await connectDB();
    try{
        const{id} = context.params;
        const body = await req.json();

        const updated_society = await Society.findByIdAndUpdate(id, body,{
            new : true, 
            run_validators: true,
        });

        if(!updated_society){
            return NextResponse.json({success: false, message: "Society not found"}, { status: 404});
        }

        return NextResponse.json({success: true, society: updated_society});
    } catch(err){
        console.error("UPDATE ERROR: ", err);
        return NextResponse.json({success: false, error: err.message}, { status : 500});
    }
}

//this code extracts id from URL params and gets the body, finds the required society, updates it and returns the updated object

export async function DELETE(req, {params}){
    await connectDB();

    try{
        const{id} = context.params;

        const deleted_society = await Society.findByIdAndDelete(id);

        if(!deleted_society)
            return NextResponse.json({success: false, message: "Society not found"}, {status : 404});

        return NextResponse.json({succes: true, message: "Society deleted successfully"});
    } catch(err){
        console.error("DELETE ERROR ", err);
        return NextResponse.json({success: false, error : err.message}, {status : 500});
    }
}