import MenuDisplay from "../../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import MainPySection from "./mainPySection/mainPySection";
import Footer from "../../../primaryComponents/footerComponents/footer";

const PyDisplay=()=>{
    return (
        <>
            <MenuDisplay />
            <SecondaryTitleDesign page="py" changeBg={true}/>
            <MainPySection/>
            <Footer/>
        </>
    )
}
export default PyDisplay;