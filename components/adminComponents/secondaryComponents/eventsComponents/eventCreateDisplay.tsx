"use client"

import ImageUpload from "../../../systemComponents/modules/imageUpload";
import ButtonDesign from "../../../systemComponents/modules/buttonDesign";

import dynamic from "next/dynamic";
import context from "../../../systemComponents/context/context";

import { useState } from "react";
import { useEdgeStore } from '@/lib/edgestore';
import { useContext } from "react";
import { uploadImage } from "../../../systemComponents/microFunctions/uploadImage";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';
import { universalJSONPost } from "../../../systemComponents/apiConnectors/system/POST";
import PopUp from "../../../systemComponents/modules/popUp";

type formBody = {
    title: string;
    startDate: Date;
    endDate: Date;
    banner: string;
    body: string;
}

const EventCreateDisplay = () => {
    const [eventBody, setEventBody] = useState("");
    const [file, setFile] = useState<File>();
    const [showPopUp, setShowPopUp] = useState(false);

    const [formBody, setFormBody] = useState<formBody>({
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        banner: "",
        body: ""
    })
    const [dateTimeCombo, setDateTimeCombo] = useState({
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
    })

    const { edgestore } = useEdgeStore();

    const contextContainer = useContext(context);

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            const { data, status } = await uploadImage(file, edgestore);
            if (status) {
                const concatenatedStartDate = dateTimeCombo.startDate + ' ' + dateTimeCombo.startTime;
                const concatenatedEndDate = dateTimeCombo.endDate + ' ' + dateTimeCombo.endTime;
                setFormBody({ ...formBody, startDate: new Date(concatenatedStartDate), endDate: new Date(concatenatedEndDate), banner: data, body: eventBody });
                const response = await universalJSONPost(formBody, "/admin/events");
                console.log(response);
            }
            else if (status === false) {
                contextContainer.setLoading(2);
            }
        }
        catch (err) {
            contextContainer.setLoading(2);
        }
    }

    const formDiscard = async (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <form>
                <input type="text" value={formBody.title} placeholder="Event title" className="p-2 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setFormBody({ ...formBody, title: e.target.value })} />
                <div className="grid grid-cols-2 grid-rows-1 gap-2">
                    <div className="mt-8"> Start date & time (24-hr-format)</div>
                    <div className="mt-8">End date & time (24-hr-format)</div>
                    <div className="flex gap-5"> <input type="date" value={dateTimeCombo.startDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startDate: e.target.value })} /> <input type="time" value={dateTimeCombo.startTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startTime: e.target.value })} /></div>
                    <div className="flex gap-5"> <input type="date" value={dateTimeCombo.endDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endDate: e.target.value })} /> <input type="time" value={dateTimeCombo.endTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endTime: e.target.value })} /></div>
                </div>
                <h1 className="mt-8 mb-2"> Event banner : </h1>
                <ImageUpload setFile={setFile} fullWidth={true} />
                <h1 className="mt-8"> Event details : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={eventBody} onChange={setEventBody} />
                <div className="mt-20 flex gap-5">
                    <button onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text="Create event" noArrow={true} /></button>
                    <button onClick={formDiscard}><ButtonDesign text="Discard event" noArrow={true} /></button>
                </div>

            </form>
            <PopUp title="Event Publishment" body="Do you want to publish this event ?" buttonTexts={["Publish event"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer}/>

        </>
    )
}
export default EventCreateDisplay;