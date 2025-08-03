import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Db connection Success full"));
        
        
    } catch (error) {
        console.log(error);        
        
    }

}
