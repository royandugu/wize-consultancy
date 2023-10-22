import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import BestSolutionSection from "./bestSolutionSection/bestSolutionSection";
import OptionSection from "../homeComponents/optionSection/optionSection";
import OurTeamMembersSection from "./ourTeamMembersSection/ourTeamMembersSection";

const AboutDisplay = () => {
    return (
        <div className="overflow-x-hidden"> 
            <SecondaryTitleDesign page="about"/>
            <BestSolutionSection/>
            <OptionSection/>
            <OurTeamMembersSection/> 
        </div>
    )
}

export default AboutDisplay;