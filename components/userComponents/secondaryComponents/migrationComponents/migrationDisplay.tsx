import SecondaryTitleDesign from "../../../systemComponents/commonDesgins/secondaryTitleDesign";
import AosWrapper from "../../../systemComponents/wrapper/aosWrapper";
import MainMigrationSection from "./mainMigrationSection";

const MigrationDisplay=()=>{
    return (
        <AosWrapper>  
            <SecondaryTitleDesign changeBg={true} page="Migration" para="Are you dreaming of starting a new life in the land Down Under? Look no further – our dedicated team of experts is here to guide you through every step of the migration process. Whether you're seeking new career opportunities, a better quality of life, or simply want to experience the vibrant Australian culture, we are here to make your migration journey smooth and successful."/>
            <MainMigrationSection/>
        </AosWrapper>
    )
}
export default MigrationDisplay;