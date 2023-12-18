"use client"

import { useState } from "react";
import { universalPost } from "../apiConnectors/system/POST";
import { useRouter } from "next/navigation";

import Link from "next/link";

import "./loginAndRegister.css";

type LoginProp={
    isAdmin:boolean;
}

const Login=(props:LoginProp)=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const router=useRouter();

    const sendLoginRequest=async (e:any)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password
        }
        const url=`${props.isAdmin?'/admin/login':'/login'}`
        
        const res=await universalPost(data,url,"/user/dashbaord");
        if(res?.ok) router.push("/user/dashboard");
    }

    return(
        <form className="loginAndRegisterForm" onSubmit={(e)=>sendLoginRequest(e)}>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Login </button>
            <h1> Don't have an account? <Link href="/register" className="text-red-400"> Register </Link> </h1>
        </form>
    )
}

export default Login;