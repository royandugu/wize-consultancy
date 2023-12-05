import { NextResponse } from "next/server";
import { loginAdmin } from "../../../../../../API/controllers/admin/registerAndLogin";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:any):Promise<any>=>{
    try{
        const response=await loginAdmin(await request.json());
        return NextResponse.json({message:response.message},{status:response.status});
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.BAD_REQUEST});
    }
}