"use client"

import { useRouter } from "next/navigation";

import Register from "../../../components/systemComponents/loginAndRegister/register";

const Page=()=>{

    const router=useRouter();
    return <Register router={router}/>  
}

export default Page;