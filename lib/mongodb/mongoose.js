import mongoose from "mongoose"

let isConnected=false

export const connectToDB=async ()=>{
    mongoose.set("strictQuery",true)

    if(isConnected)
    console.log("Connection already exists");
return
}

try {
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"vibezone"
    })
    isConnected=true
    console.log("Mongo connected");
} catch (error) {
    console.log(error);
}



