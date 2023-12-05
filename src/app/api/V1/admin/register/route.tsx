import { NextResponse } from "next/server";
import { registerAdmin } from "../../../../../../API/controllers/admin/registerAndLogin";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:any):Promise<any>=>{
    try{
        const requestBody=await request.json();
        const response=await registerAdmin(requestBody);
        return NextResponse.json({message:response.message},{status:response.status});
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.BAD_REQUEST})
    }
} 