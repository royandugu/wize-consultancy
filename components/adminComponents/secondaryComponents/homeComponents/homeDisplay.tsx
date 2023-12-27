import FeaturesSection from "../../../userComponents/secondaryComponents/homeComponents/featuresSection/featuresSection";
import StatsSection from "../../../userComponents/secondaryComponents/homeComponents/statsSection/statsSection";
import OptionSection from "../../../userComponents/secondaryComponents/homeComponents/optionSection/optionSection";

const HomeDisplay=()=>{
    return (
        <>
            <FeaturesSection/>
            <StatsSection isAdmin={true}/>
            <OptionSection isAdmin={true}/> 
        </>
    )
}
export default HomeDisplay; 