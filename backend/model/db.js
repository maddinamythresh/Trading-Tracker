const mongoose=require('mongoose')
cont 
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected:${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}