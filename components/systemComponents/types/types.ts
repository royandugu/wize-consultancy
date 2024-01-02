export type EventType = {
    _id?:string;
    title: string;
    startDate: Date;
    endDate: Date;
    banner: string;
    body: string;
}

export type defaultApiResponse={
    message:string;
    status:number;
    bodyData?:any;
}

export type login={
    email:string,
    password:string
}
