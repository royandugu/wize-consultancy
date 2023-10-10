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
        <>
            <MenuDisplay />
            <WelcomeSection />
            <FeaturesSection/>
            <StatsSection/>
            <OptionSection/>
            <TestimonialSection/>
            <Footer/>
        </>
    )
}

export default HomeDisplay;