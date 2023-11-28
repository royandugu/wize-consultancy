import { useEffect } from "react";

import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import MainIeltsSection from "./mainIeltsSection/mainIeltsSection";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";

const IeltsDisplay=()=>{
    return (
        <AosWrapper>
            <SecondaryTitleDesign page="ielts" para="At Wize Consult, we understand that achieving your dreams of studying abroad or immigrating to an English-speaking country often hinges on your ability to demonstrate proficiency in the English language. That's where our IELTS page comes in – your key to unlocking success in the IELTS (International English Language Testing System) examination." changeBg={true}/>
            <MainIeltsSection/>
        </AosWrapper>
    )
}
export default IeltsDisplay;