const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/")
        console.log(`MongoDB is connected`)
    } catch(error){
        console.log(`MongoDB Connection Failed`)
        console.log(error.message)

        process.exit(1)
    }
}


module.exports =  connectDB;