import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import WelcomePage from "./welcomePage/welcomeSection";

import "./homeDisplay.css";

const HomeDisplay=()=>{
    return (
        <>
            <MenuDisplay/>
            <WelcomePage/>
            <div className="featuresContainer text-center pt-5 bg-black">
                <h5 className="text-[13px]"> \\FEATURES\\ </h5> 
                <h1 className="text-[25px]"> Explore your options </h1>
            </div>
        </>
    ) 
} 

export default HomeDisplay;