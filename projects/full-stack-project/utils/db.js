import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

//Exporting a fucntion that connects to db
const db = ()=> {
    mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log("connected to mongodb");
})
.catch((err)=> {
    console.log("Error connecting DB");
})
}

export default db;
