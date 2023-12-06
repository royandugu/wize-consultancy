import { NextResponse } from "next/server";
import { registerUser } from "../../../../../API/controllers/user/registerAndLogin";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:any):Promise<any>=>{
    try{
        const requestBody=await request.json();
        const response=await registerUser(requestBody);
        return NextResponse.json({message:response.message},{status:StatusCodes.OK})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.BAD_REQUEST})
    }
}  