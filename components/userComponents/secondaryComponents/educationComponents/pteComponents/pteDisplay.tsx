import MenuDisplay from "../../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import MainPteSection from "./mainPteSection/mainPteSection";
import Footer from "../../../primaryComponents/footerComponents/footer";

const PteDisplay=()=>{
    return (
        <>
            <MenuDisplay/>
            <SecondaryTitleDesign page="pte" changeBg={true}/>
            <MainPteSection/>
            <Footer/>
        </> 
    )
}
export default PteDisplay;