"use client"

import { useState, useRef } from "react";
import { universalFormPost } from "../apiConnectors/system/POST";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
    const [newImage ,setNewImage]=useState<any>(null);
    const [image,setImage]=useState<any>();

    const imageRef = useRef(null);

    const trimmer = (path:string) => {
        if (path) return path.replace('../public', '');
    }  

    const onImageChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {
            setNewImage(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

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
            <label className="fileType cursor-pointer">
                <div ref={imageRef} className="currentImgBackground h-[300px] w-[300px]" style={{ background: `url(${trimmer(image)})`}}>
                    <div className="fileUpload--updateProfilePfp">
                        <AiOutlinePlusCircle className="plusIcon" />
                    </div>
                </div>
                <input type="file" className="hidden" onChange={onImageChange} />
            </label>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit"> Register </button>
            <h1> Already have an account? <Link href="/login" className=" text-red-400"> Login </Link> </h1>
        </form>
    )
}
export default Register; 