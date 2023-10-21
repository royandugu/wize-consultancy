import MenuDisplay from "../../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../../systemComponents/commonDesgins/secondaryTitleDesign";
import MainIeltsSection from "./mainIeltsSection/mainIeltsSection";
import Footer from "../../../primaryComponents/footerComponents/footer";

const IeltsDisplay=()=>{
    return (
        <>
            <MenuDisplay/>
            <SecondaryTitleDesign page="ielts" changeBg={true}/>
            <MainIeltsSection/>
            <Footer/>
        </>
    )
}
export default IeltsDisplay;