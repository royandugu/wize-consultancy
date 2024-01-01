"use client"

import { ContextType, Dispatch, SetStateAction } from "react";

import Spinner from "./spinner";
import ButtonDesign from "./buttonDesign";

type PopUp = {
    showPopUp: boolean;
    setShowPopUp: Dispatch<SetStateAction<boolean>>;
    buttonTexts: Array<string>;
    title: string;
    body: string;
    functionLists: Array<(e: any) => Promise<void>>;
    contextContainer:any;
}

const PopUp = (props: PopUp) => {

    return (
        <>
            <div className={`absolute left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.6)] ${!props.showPopUp && 'hidden'}`} onClick={() => props.setShowPopUp(false)} />
            
            <div className={`fixed top-[100px] left-1/2 bg-white border border-[rgb(200,200,200)] ${!props.showPopUp && 'hidden'}`}>
                <div className="flex justify-center items-center bg-[rgb(220,220,220)] p-2">
                    <h1 className="text-[20px]"> {props.title} </h1>
                </div>
                {props.contextContainer.loading === 1?
                <div className="p-5 flex flex-col items-center">
                    <p> {props.body} </p>
                    <div className="flex gap-2 pt-5">
                        {props.buttonTexts.map((bt: string, id: number) => (
                            <button key={id} onClick={props.functionLists[id]}>
                                <ButtonDesign noArrow={true} text={bt} />
                            </button>
                        ))}
                    </div>
                </div>
                :<Spinner button={true}/>}
                
            </div>
        </>
    )
}
export default PopUp;