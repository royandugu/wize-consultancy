import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";
import MainOccupationSection from "./mainOccupationSection/mainOccupationSection";

const OccupationDisplay=()=>{   
    return(
        <AosWrapper>
            <SecondaryTitleDesign page="Occupation"/>
            <MainOccupationSection/>
        </AosWrapper>
    )
}
export default OccupationDisplay;