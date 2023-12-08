"use client"
import { useState } from "react";
import { universalFormPost } from "../apiConnectors/system/POST";

import Link from "next/link";

import "./loginAndRegister.css";

type registerProp={
    router:any;
}

export const Register=(prop:registerProp)=>{
    const [profile,setProfile]=useState<any>();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const registerUser=async (e:any)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.set("profile",profile);
        formData.set("name",name);
        formData.set("email",email);
        formData.set("password",password);
        
        await universalFormPost(formData,"/register","/user/dashbaord",prop.router);
    }

    return(
        <form className="loginAndRegisterForm" onSubmit={(e)=>registerUser(e)}>
            <input type="file" onChange={(e)=>setProfile(e.target.files?.[0])}/>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Register </button>
            <h1> Already have an account? <Link href="/login" className=" text-red-400"> Login </Link> </h1>
        </form>
    )
}
export default Register; 