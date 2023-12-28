import FeaturesSection from "../../../userComponents/secondaryComponents/homeComponents/featuresSection/featuresSection";
import StatsSection from "../../../userComponents/secondaryComponents/homeComponents/statsSection/statsSection";
import OptionSection from "../../../userComponents/secondaryComponents/homeComponents/optionSection/optionSection";
import ButtonDesign from "../../../systemComponents/staticComponents/buttonDesign";

const HomeDisplay=()=>{
    return (
        <>
            <FeaturesSection/>
            <StatsSection isAdmin={true}/>
            <OptionSection isAdmin={true}/> 
            <div className="mt-5 flex gap-5">
                <ButtonDesign text="Confirm changes" noArrow={true} />
                <ButtonDesign text="Discard changes" noArrow={true} />
            </div>
        </>
    )
}
export default HomeDisplay; 