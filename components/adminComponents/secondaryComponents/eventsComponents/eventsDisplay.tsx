"use client"

import ImageUpload from "../../../systemComponents/modules/imageUpload";
import dynamic from "next/dynamic";

import { useState } from "react";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';
import ButtonDesign from "../../../systemComponents/staticComponents/buttonDesign";

const EventsDisplay = () => {
    const [eventBody, setEventBody] = useState("");
    const [file,setFile]=useState<File>();

    return (
        <form>
            <input type="text" placeholder="Event title" className="p-2 border border-[rgb(200,200,200)] w-full h-[40px]" />
            <div className="grid grid-cols-2 grid-rows-1 gap-2">
                <div className="mt-8"> Start date & time (24-hr-format)</div>
                <div className="mt-8">End date & time (24-hr-format)</div>
                <div className="flex gap-5"> <input type="date" className="p-2 border border-[rgb(200,200,200)]"/> <input type="time" className="p-2 border border-[rgb(200,200,200)]"/></div>
                <div className="flex gap-5"> <input type="date" className="p-2 border border-[rgb(200,200,200)]"/> <input type="time" className="p-2 border border-[rgb(200,200,200)]"/></div>
            </div>
            <h1 className="mt-8 mb-2"> Event banner : </h1>
            <ImageUpload setFile={setFile} fullWidth={true}/>
            <h1 className="mt-8"> Event details : </h1>
            <ReactQuill theme="snow" className="h-[400px]" value={eventBody} onChange={setEventBody} />
            <div className="mt-20 flex gap-5">
                <ButtonDesign text="Create event" noArrow={true}/>
                <ButtonDesign text="Discard event" noArrow={true}/>
            </div>
        </form>
    )
}
export default EventsDisplay;