import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import ieltsModel from "../../models/ieltsModel/ieltsModel";

export const getIelts=async ()=>{
    const indvIelts=await ieltsModel.findOne({});
    if(!indvIelts) setMessageAndResponse("The event does not exist",null,StatusCodes.NOT_FOUND);
    else setMessageAndResponse("Your desired event",indvIelts,StatusCodes.OK);
    return response;
}   