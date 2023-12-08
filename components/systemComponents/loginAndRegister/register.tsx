"use client"
import { useState } from "react";
import { universalPost } from "../apiConnectors/system/POST";

import Link from "next/link";

import "./loginAndRegister.css";

type registerProp={
    router:any;
}

export const Register=(prop:registerProp)=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const registerUser=async (e:any)=>{
        e.preventDefault();
        const body={
            name:name,
            email:email,
            password:password
        }
        await universalPost(body,"/register","/user/dashbaord",prop.router);
    }

    return(
        <form className="loginAndRegisterForm" onSubmit={(e)=>registerUser(e)}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Register </button>
            <h1> Already have an account? <Link href="/login" className=" text-red-400"> Login </Link> </h1>
        </form>
    )
}
export default Register; 