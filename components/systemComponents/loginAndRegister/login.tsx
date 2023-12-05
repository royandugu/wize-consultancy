"use client"

import { useState } from "react";
import { universalPost } from "../apiConnectors/system/POST";

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
        await universalPost(data,"",0);
    }

    return(
        <form className="loginAndRegisterForm" onSubmit={(e)=>sendLoginRequest(e)}>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Login </button>
        </form>
    )
}

export default Login;