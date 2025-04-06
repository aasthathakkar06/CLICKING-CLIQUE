import connectToDatabase from "@/lib/mongodb";

export async function GET(){
    try{
        await connectToDatabase();
        return new Response('Mongodb connected successfully',{status : 200});
    } catch (error){
        console.error(error);
        return new Response('Error in connecting to Mongodb', {status : 500}); 
    }
    }
