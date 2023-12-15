"use client"

import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRef } from "react";

type ImageUploadProp={
    setFile:Dispatch<SetStateAction<File | undefined>>
}

const ImageUpload=(prop:ImageUploadProp)=>{
    const [image,setImage]=useState("");

    const imgBackgroundRef=useRef<any>(null);

    useEffect(() => {
        if (imgBackgroundRef.current) {
          imgBackgroundRef.current.style.backgroundSize = 'cover';
        }
    }, [image]);
    
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
          prop.setFile(event.target.files[0]);
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const trimmer = () => {
        return image.replace('../public', '');
    }
    
    return(
        <label className="fileType mb-20 h-[200px] w-[200px]">
          <div ref={imgBackgroundRef} className="currentImgBackground h-[200px] w-[200px]" style={{background:`url(${trimmer()})`}}>
            <div className="fileUpload--updateProfilePfp" style={{ height: 200, width: 200, marginTop: 0 }}>
              <AiOutlinePlusCircle className="plusIcon" style={{ fontSize: 100 }} />
            </div>
          </div>
          <input type="file" className="noBorder" onChange={(e) => onImageChange(e)} />
        </label>
    )
}
export default ImageUpload;