import { defaultApiResponse } from "../../../components/systemComponents/types/apiResponse";
import { StatusCodes } from "http-status-codes";

import eventModel from "../../models/eventModel/eventModel";

let response:defaultApiResponse={message:"",bodyData:null,status:0}

const setMessageAndResponse=(message:string,bodyData:any,status:number)=>{
    response.message=message;
    response.status=status;
    response.bodyData=bodyData;
}

export const getIndvEvent=async (id:string)=>{
    const indvEvent=await eventModel.findOne({_id:id});
    if(!indvEvent) setMessageAndResponse("The event does not exist",null,StatusCodes.NOT_FOUND);
    else setMessageAndResponse("Your desired event",indvEvent,StatusCodes.OK);
    return response;
}   

export const getAllEvents=async ()=>{
    const events=await eventModel.find({});
    setMessageAndResponse("All your events",events,StatusCodes.OK);
    return response;
}

export const createEvent=async (body:object)=>{
    const createdEvent=await eventModel.create(body);
    setMessageAndResponse("Event created", createdEvent,StatusCodes.CREATED);
    return response;
}

export const updateEvent=async (id:string, body:object)=>{
    try{
        const updatedEvent=await eventModel.findOneAndUpdate({_id:id},body,{new:true, runValidators:true});
        setMessageAndResponse("Event sucesfully updated", updatedEvent,StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const deleteEvent=async (id:string)=>{
    try{
        const deletedEvent=await eventModel.findOneAndDelete({_id:id});
        setMessageAndResponse("Event sucesfully deleted", deletedEvent,StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}
