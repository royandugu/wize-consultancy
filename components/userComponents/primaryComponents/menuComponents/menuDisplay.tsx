import NavigationContainer from "./navigationContainer";

import "./menuDisplay.css";

const MenuDisplay = () => {
    return (
        <div className="menuDisplay fixed top-10 left-20 right-20 p-5 rounded-md shadow-lg" style={{borderTop:"1px solid black"}}>
            <div className="flex flex-row" style={{alignItems:"center"}}>
                <div className="logoContainer">
                    <h5 className="title"> Logo </h5>
                </div>
                <div className="navigationContainer px-20 ml-20">
                    <NavigationContainer />
                </div>
                <div className="searchBar">
                    <h5> Search bar </h5>
                </div>
                <div className="contactUs">
                    <h5> Contact us </h5>
                </div>
            </div>
        </div>
    )
}
export default MenuDisplay;