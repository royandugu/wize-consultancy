import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Title field is required"]
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    }
},{timestamps:true})

export default mongoose.model("user-model",userSchema);