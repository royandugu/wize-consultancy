import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { registerUser } from "../../../../../API/controllers/user/registerAndLogin";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const requestBody=await request.json();
        console.log(requestBody);
        const response=await registerUser(requestBody);
        console.log(response);
        return NextResponse.json({message:response.message},{status:StatusCodes.CREATED});
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({message:err.message},{status:StatusCodes.BAD_REQUEST})
    }
}  