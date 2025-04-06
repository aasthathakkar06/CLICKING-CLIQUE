import User from "@/models/user";
import{ NextResponse} from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose'


export async function GET(){
    await connectDB();

    try{
        const users = await User.find();
        return NextResponse.json({success : true, users});
    } catch(error){
        return NextResponse.json({success: false, error : error.message}, {status : 500});
    }
    }

    export async function POST(request){
        console.log("Received POST request at /api/society");
        await connectDB();

        try{
            const body = await request.json();
            console.log("POST BODY: ", body); //debug log
            const newUser = await User.create(body);
            return NextResponse.json({sucess: true, user: newUser},{status : 201});
        } catch(error){
            console.error("POST ERROR: ",error.message); //print the error 
            return NextResponse.json({success: false, error : error.message}, {status : 500});
        }
    }
    import User from "@/models/user";
    import{ NextResponse} from 'next/server';
    import connectDB from '@/lib/mongodb';
    
    
    export async function GET(){
        await connectDB();
    
        try{
            const users = await User.find();
            return NextResponse.json({success : true, users});
        } catch(error){
            return NextResponse.json({success: false, error : error.message}, {status : 500});
        }
        }
    
        export async function POST(request){
            console.log("Received POST request at /api/society");
            await connectDB();
    
            try{
                const body = await request.json();
                console.log("POST BODY: ", body); //debug log
                const newUser = await User.create(body);
                return NextResponse.json({success: true, user: newUser},{status : 201});
            } catch(error){
                console.error("POST ERROR: ",error.message); //print the error 
                return NextResponse.json({success: false, error : error.message}, {status : 500});
            }
        }
    