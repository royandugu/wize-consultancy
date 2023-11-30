import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email must be present"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    }
},{timestamps:true})

export default mongoose.model("user-model",adminSchema);