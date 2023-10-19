import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import Footer from "../../primaryComponents/footerComponents/footer";

const AboutDisplay = () => {
    return (
        <div className="overflow-x-hidden"> 
            <MenuDisplay />
            <SecondaryTitleDesign page="about"/>
            <Footer/>
        </div>
    )
}

export default AboutDisplay;