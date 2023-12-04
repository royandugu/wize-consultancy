import { NextResponse } from "next/server";
import { loginAdmin } from "../../../../../../API/controllers/admin/registerAndLogin";

export const POST=async (request:any):Promise<any>=>{
    const response=await loginAdmin(await request.json());
    return NextResponse.json({message:response.message},{status:response.status});
}