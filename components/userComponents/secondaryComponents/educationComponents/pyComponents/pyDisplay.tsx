import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";
import MainPySection from "./mainPySection/mainPySection";

const PyDisplay=()=>{
    return (
        <AosWrapper>
            <SecondaryTitleDesign page="py" para="Are you an international graduate in Australia, eager to bridge the gap between your academic qualifications and a successful career in your field? Wize Consult welcomes you to explore the world of Professional Year programs in Australia. Our Professional Year page is your gateway to a comprehensive understanding of this unique opportunity." changeBg={true}/>
            <MainPySection/>
        </AosWrapper>
    )
}
export default PyDisplay;