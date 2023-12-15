import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import AosWrapper from "../../../../systemComponents/wrapper/aosWrapper";
import MainStudentSection from "./mainStudentSection/mainStudentSection";

const StudentDisplay=()=>{
    return(
        <AosWrapper>
            <SecondaryTitleDesign page="Student" para="Are you ready to take your education to an international level? Studying in Australia offers top-notch education. but also an enriching cultural experience. Our team is dedicated to helping you navigate the student visa process, making your academic journey abroad seamless."/>
            <MainStudentSection/>
        </AosWrapper>
    )
}
export default StudentDisplay;