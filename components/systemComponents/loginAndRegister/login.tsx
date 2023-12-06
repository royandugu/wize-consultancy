"use client"

import { useState } from "react";
import { universalPost } from "../apiConnectors/system/POST";

import Link from "next/link";

import "./loginAndRegister.css";

type LoginProp={
    isAdmin:boolean;
}

const Login=(prop:LoginProp)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const sendLoginRequest=async (e:any)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password
        }
        const url=`${prop.isAdmin?'/admin/login':'/login'}`
        await universalPost(data,url,1);
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