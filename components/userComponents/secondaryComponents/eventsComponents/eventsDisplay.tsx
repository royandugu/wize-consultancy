import MenuDisplay from "../../primaryComponents/menuComponents/menuDisplay";
import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import EventListSection from "./eventListSection/eventListSection";
import Footer from "../../primaryComponents/footerComponents/footer";

const EventsDisplay = () => {
    return (
        <>
            <MenuDisplay />
            <SecondaryTitleDesign page="events" />
            <EventListSection/>
            <Footer/>
        </>
    )
}
export default EventsDisplay;