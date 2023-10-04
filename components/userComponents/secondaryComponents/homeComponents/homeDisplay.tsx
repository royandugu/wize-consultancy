import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import WelcomeSection from "./welcomeSection/welcomeSection";
import FeaturesSection from "./featuresSection/featuresSection";

import "./homeDisplay.css";

const HomeDisplay = () => {
    return (
        <>
            <MenuDisplay />
            <WelcomeSection />
            <FeaturesSection/>
        </>
    )
}

export default HomeDisplay;