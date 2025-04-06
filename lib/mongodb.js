import mongoose from 'mongoose';
//importing mongoose library 
const MONGO_URI = process.env.MONGO_URI; //fetching mongodb uri fron enviornment variable
//if it is not defined the app throws error and crashes  which prevents app from running with misconfiguration
console.log('Trying to connect to : ', MONGO_URI);
if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

let cached = global.mongoose;
//this caching ensures the reuse of mongodb connection instead of opening a new one with every request
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }; 
}
//will store the actual connected mongoose instance and promise returned by mongoose connect
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
//returns the cached connection preventing reconnecting to the database everytime the function is called 
  if (!cached.promise) { //if no promise exists, it means the connection hasn't started yet
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose)=> mongoose);} //this ensures that we return the actual mogoose connection after it's established 
      

  cached.conn = await cached.promise;
  return cached.conn; //once the connection is sucessful we store it cached connection
}

export default connectDB;
//this exports the function so we can import it in other files 