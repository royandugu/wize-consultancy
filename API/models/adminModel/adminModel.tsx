import mongoose from "mongoose";

const bcrypt=require("bcryptjs");

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

adminSchema.methods.verifyPassword=async function(candidatePassword:string){
    const match=await bcrypt.compare(candidatePassword,this.password);
    return match;
} 

export default mongoose.model("admin-model",adminSchema);