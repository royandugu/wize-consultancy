import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import WelcomeSection from "./welcomeSection/welcomeSection";
import FeaturesSection from "./featuresSection/featuresSection";
import StatsSection from "./statsSection/statsSection";
import OptionSection from "./optionSection/optionSection";
import TestimonialSection from "./testimonialSection/testimonialSection";
import Footer from "../../primaryComponents/footerComponents/footer";

import "./homeDisplay.css";

const HomeDisplay = () => {
    return (
        <div className="overflow-x-hidden"> 
            <MenuDisplay />
            <WelcomeSection />
            <FeaturesSection/>
            <StatsSection/>
            <OptionSection/>
            <TestimonialSection/>
            <Footer/>
        </div>
    )
}

export default HomeDisplay;