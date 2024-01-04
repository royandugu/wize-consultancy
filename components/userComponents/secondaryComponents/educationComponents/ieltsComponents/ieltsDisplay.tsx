import { Dispatch, SetStateAction } from "react";

import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import MainIeltsSection from "./mainIeltsSection/mainIeltsSection";

type IeltsDisplay = {
    isAdmin?: boolean,
    ieltsTextSection:any,
    setIeltsTextSection:Dispatch<SetStateAction<any>>,
    pictureOne:File | undefined,
    setPictureOne:Dispatch<SetStateAction<File | undefined>>,
    pictureTwo:File | undefined,
    setPictureTwo:Dispatch<SetStateAction<File | undefined>>,
    imageOne:string
    setImageOne:Dispatch<SetStateAction<string>>,
    imageTwo:string
    setImageTwo:Dispatch<SetStateAction<string>>
}

const IeltsDisplay = (props: IeltsDisplay) => {
    return (
        <>
            {!props.isAdmin && <SecondaryTitleDesign page="ielts" para="At Wize Consult, we understand that achieving your dreams of studying abroad or immigrating to an English-speaking country often hinges on your ability to demonstrate proficiency in the English language. That's where our IELTS page comes in – your key to unlocking success in the IELTS (International English Language Testing System) examination." changeBg={true} />}
            <MainIeltsSection isAdmin={props.isAdmin} ieltsTextSection={props.ieltsTextSection} setIeltsTextSection={props.setIeltsTextSection} setPictureOne={props.setPictureOne} setPictureTwo={props.setPictureTwo} imageOne={props.imageOne} imageTwo={props.imageTwo} setImageOne={props.setImageOne} setImageTwo={props.setImageTwo}/>
            
        </>
    )
}
export default IeltsDisplay;