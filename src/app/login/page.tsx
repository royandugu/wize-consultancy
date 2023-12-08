"use client"

import { useRouter } from "next/navigation";

import Login from "../../../components/systemComponents/loginAndRegister/login";

const Page=()=>{
    const router=useRouter();

    return <Login isAdmin={false} router={router}/>    
}
 
export default Page;