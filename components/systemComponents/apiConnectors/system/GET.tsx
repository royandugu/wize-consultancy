import { API_URL } from "../../../../API/globals/url";

export const universalGet=async (url:string)=>{
    const response=await fetch(`${API_URL}${url}`);
    return response.json();
}
