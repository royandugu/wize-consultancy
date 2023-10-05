import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import WelcomeSection from "./welcomeSection/welcomeSection";
import FeaturesSection from "./featuresSection/featuresSection";
import StatsSection from "./statsSection/statsSection";

import "./homeDisplay.css";

const HomeDisplay = () => {
    return (
        <>
            <MenuDisplay />
            <WelcomeSection />
            <FeaturesSection/>
            <StatsSection/>
        </>
    )
}

export default HomeDisplay;