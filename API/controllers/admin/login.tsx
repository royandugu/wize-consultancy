import { defaultApiResponse } from "../../../components/systemComponents/types/apiResponse";
import { StatusCodes } from "http-status-codes";

import adminModel from "../../models/adminModel/adminModel";

let response:defaultApiResponse={message:"",status:0}

type adminCredentials={
    email:string,
    password:string
}

const setMessageAndResponse=(message:string,status:number)=>{
    response.message=message;
    response.status=status;
}

export const loginAdmin=async (body:adminCredentials)=>{
    try{
        const {email,password}=body;
        if(!email || !password) {
            setMessageAndResponse("Credentials incomplete",StatusCodes.BAD_REQUEST);
            return response;
        }
    }   
    catch(err){

    }    
}