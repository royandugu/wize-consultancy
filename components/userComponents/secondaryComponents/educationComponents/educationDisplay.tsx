import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import MainEducationSection from "./mainEducationSection";
import AosWrapper from "../../../systemComponents/wrapper/aosWrapper";

const EducationDisplay=()=>{
    return(
        <AosWrapper>
            <SecondaryTitleDesign page="Education" changeBg={true} para="Unlock your potential and embark on a transformative educational adventure in Australia. Our education services can provide a gateway to a world-class learning experience in a vibrant and diverse setting. Whether you're a prospective international student seeking higher education, vocational training, or English language courses, Australia offers a myriad of opportunities to help you achieve your academic goals."/>
            <MainEducationSection/>
        </AosWrapper>
    )
}
export default EducationDisplay;