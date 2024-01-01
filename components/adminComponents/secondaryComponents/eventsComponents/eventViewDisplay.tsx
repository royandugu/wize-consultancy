"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useState, useContext, useEffect } from "react";
import { deleteImage } from "../../../systemComponents/microFunctions/deleteImage";
import { useEdgeStore } from '@/lib/edgestore';
import { EventType } from "../../../systemComponents/types/types";

import parse from "html-react-parser"
import Spinner from "../../../systemComponents/modules/spinner";
import PopUp from "../../../systemComponents/modules/popUp";
import Table from "../../primaryComponents/table";
import context from "../../../systemComponents/context/context";

const EventViewDisplay = () => {
    const [showPopUp,setShowPopUp]=useState(false);
    const [selectedEventInfo,setSelectedInfoData]=useState<EventType>({
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        banner: "",
        body: ""
    });

    const contextContainer=useContext(context);
    const edgestore=useEdgeStore();

    const { data, status } = useQuery("all-events", () => universalGet("/events"));

    useEffect(()=>{
        contextContainer.setLoading(1);
    },[])

    const deleteEvent=async (url:string)=>{
        try{
            const {status}=await deleteImage(url,edgestore);
            console.log(status);
        }
        catch(err:any){

        }
    }

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h1> Data fetch error </h1>
    else if (status === "success") {
        const newData = data.map((item: any) => {
            const formattedStartDate = new Date(item.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false});

            const formattedEndDate = new Date(item.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12:false});

            return {
                ...item,
                startDate:formattedStartDate,
                endDate:formattedEndDate,
                body: parse(item.body.slice(0, 100))
            };
        });
        return (
            <>
                <Table title="Your events" tableRows={["Banner", "Title", "Start date", "End date", "Body", "Action"]} dataKeys={["banner", "title", "startDate", "endDate", "body"]} tableCols={newData} hasImage={true} parseOn={5} setShowPopUp={setShowPopUp} setSelectedData={setSelectedInfoData}/>
                <PopUp title="Delete event" showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Delete event"]} body="Are you sure you want to delete the selected event?" contextContainer={contextContainer} functionLists={[deleteEvent]}/>
            </>
        )
    }
}
export default EventViewDisplay; 