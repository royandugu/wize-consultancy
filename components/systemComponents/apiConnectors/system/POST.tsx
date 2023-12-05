require("dotenv").config();

export const universalPost = async (data:any,url:string,postIndentifier:number) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(`${process.env.API_URL}/${url}`, requestOptions);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}
