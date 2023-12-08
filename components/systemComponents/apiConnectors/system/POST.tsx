"use client"

import { API_URL } from "../../../../API/globals/url";

export const universalPost = async (data:any,url:string,destination:string,router:any) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const fullUrl=`${API_URL}${url}`

    console.log(typeof router)
    router.push(destination);

    try {
        await fetch(fullUrl, requestOptions);
    } catch (error) {
        console.error('Error:', error);
    }
}
