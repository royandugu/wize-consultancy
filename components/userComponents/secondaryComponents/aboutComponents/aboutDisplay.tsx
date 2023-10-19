import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import BestSolutionSection from "./bestSolutionSection/bestSolutionSection";
import OptionSection from "../homeComponents/optionSection/optionSection";
import Footer from "../../primaryComponents/footerComponents/footer";

const AboutDisplay = () => {
    return (
        <div className="overflow-x-hidden"> 
            <MenuDisplay />
            <SecondaryTitleDesign page="about"/>
            <BestSolutionSection/>
            <OptionSection/>
            <Footer/>
        </div>
    )
}

export default AboutDisplay;