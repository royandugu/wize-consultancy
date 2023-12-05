import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";
import MainVisitorSection from "./mainVisitorSection/mainVisitorSection";

const VisitorDisplay=()=>{
    return (
        <AosWrapper>
            <SecondaryTitleDesign changeBg={true} page="Visitor" para="If you're planning to explore the wonders of Australia for a short period, our visitor visa services are designed to make your journey hassle-free. Whether you're visiting family, friends, or simply taking a vacation, we're here to assist you in obtaining the right visitor visa."/>
            <MainVisitorSection/>
        </AosWrapper>
    )
}
export default VisitorDisplay;