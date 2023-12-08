"use client"

import { API_URL } from "../../../../API/globals/url";

export const universalFormPost = async (data:any,url:string,destination:string,router:any) => {
    const requestOptions = {
        method: 'POST',
        body: data
    };

    const fullUrl=`${API_URL}${url}`

    try {
        const response=await fetch(fullUrl, requestOptions);
        if(response.ok) router.push(destination);
    } catch (error) {
        console.error('Error:', error);
    }
}
