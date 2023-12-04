import { defaultApiResponse } from "../../../components/systemComponents/types/apiResponse";
import { StatusCodes } from "http-status-codes";

import adminModel from "../../models/adminModel/adminModel";

const bcrypt=require("bcryptjs");

let response:defaultApiResponse={message:"",status:0}

type adminCredentials={
    email:string,
    password:string
}

const setMessageAndResponse=(message:string,status:number)=>{
    response.message=message;
    response.status=status;
}

export const registerAdmin=async (body:adminCredentials)=>{
    try{
        const {email,password}=body;
        console.log(body);
        if(!email || !password) {
            setMessageAndResponse("Credentials incomplete",StatusCodes.BAD_REQUEST);
        }
        else{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            body.password=hashedPassword;
            await adminModel.create(body);
            setMessageAndResponse("Admin succesfully registered",StatusCodes.CREATED);
        }
        return response;
    }
    catch(err:any){
        console.log(err);
        setMessageAndResponse(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
        return response;
    }    
}

export const loginAdmin=async (body:adminCredentials)=>{
    try{
        const {email,password}=body;
        if(!email || !password) {
            setMessageAndResponse("Credentials incomplete",StatusCodes.BAD_REQUEST);
        }
        else {
            //set session
            const adminData=adminModel.findOne({email:email});
            if(!adminData) setMessageAndResponse("The email doesnot exist", StatusCodes.BAD_REQUEST);
            else{
                setMessageAndResponse("You have sucesfully logged in", StatusCodes.OK);
            }
        }
        return response;
        
    }   
    catch(err:any){
        setMessageAndResponse(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
        return response;
    }    
}
