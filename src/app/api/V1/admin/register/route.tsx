import { NextResponse } from "next/server";
import { registerAdmin } from "../../../../../../API/controllers/admin/registerAndLogin";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:any):Promise<any>=>{
    console.log("I have been called")
    console.log(request);
    if(request){
        const requestBody=await request.json();
        const response=await registerAdmin(requestBody);
        return NextResponse.json({message:response.message},{status:response.status});
    }
    else return NextResponse.json({message:"No way"},{status:StatusCodes.BAD_REQUEST})
} 