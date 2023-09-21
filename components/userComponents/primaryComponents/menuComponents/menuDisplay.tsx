import NavigationContainer from "./navigationContainer";
import {HiMiniBars3} from "react-icons/hi2";

import "./menuDisplay.css";

const MenuDisplay = () => {
    return (
        <div className="menuDisplay fixed top-10 lg:left-20 lg:right-20 left-5 right-5 p-5 rounded-md shadow-lg" style={{borderTop:"1px solid black"}}>
            <div className="flex flex-row items-center xs:justify-between lg:justify-start">
                <div className="logoContainer">
                    <h5 className="title"> Logo </h5>
                </div>

                <>
                    <div className="navigationContainer lg:block hidden px-20 ml-20">
                        <NavigationContainer />
                    </div>
                    <div className="searchBar lg:block hidden ">
                        <h5> Search bar </h5>
                    </div>
                    <div className="contactUs lg:block hidden">
                        <h5> Contact us </h5>
                    </div>
                </>

                <div className="lg:hidden">
                    <HiMiniBars3/>
                </div>
            
            </div>
        </div>
    )
}
export default MenuDisplay;