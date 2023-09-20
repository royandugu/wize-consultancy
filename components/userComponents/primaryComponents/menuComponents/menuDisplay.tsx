import NavigationContainer from "./navigationContainer";

const MenuDisplay = () => {
    return (
        <div className="flex flex-row bg-black">
            <div className="logoContainer">
                <h5> Logo </h5>
            </div>
            <div className="navigationContainer">
                <NavigationContainer />
            </div>
            <div className="searchBar">
                <h5> Search bar </h5>
            </div>
            <div className="contactUs">
                <h5> Contact us </h5>
            </div>
        </div>
    )
}
export default MenuDisplay;