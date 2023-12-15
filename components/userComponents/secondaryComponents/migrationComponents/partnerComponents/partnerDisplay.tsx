import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";
import MainPartnerSection from "./mainPartnerSection/mainPartnerSection";

const PartnerDisplay = () => {
    return (
        <AosWrapper>
            <SecondaryTitleDesign changeBg={true} page="Partner" para="Australia extends an invitation to international students and professionals to bring their families to the country through the Dependent Visa program. At Wize Consult, we specialize in crafting meticulously prepared application packages to expedite the arrival of your loved ones on Australian shores."/>
            <MainPartnerSection/>
        </AosWrapper>
    )
}
export default PartnerDisplay;