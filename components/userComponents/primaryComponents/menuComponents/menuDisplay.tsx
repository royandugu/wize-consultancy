import {HiMiniBars3} from "react-icons/hi2";

import NavigationContainer from "./navigationContainer";
import MiniMenu from "./miniMenu";

import "./menuDisplay.css";

const MenuDisplay = () => {
    return (
        <>
            <div className="bg-white fixed top-20 lg:left-20 lg:right-20 left-5 right-5 p-5 rounded-md shadow-lg z-20">
                <div className="flex flex-row items-center xs:justify-between lg:justify-start">
                    <div className="logoContainer">
                        <h5 className="title"> Logo </h5>
                    </div>

                    <>
                        <div className="navigationContainer lg:block hidden px-20 ml-20">
                            <NavigationContainer />
                        </div>
                        <div className="searchBar lg:block hidden ">
                            <input type="text" className="border border-black mr-10" />
                        </div>
                        <div className="contactUs lg:block hidden">
                            <button> Contact Us </button>
                        </div>
                    </>

                    <div className="lg:hidden">
                        <HiMiniBars3 className="text-lg" />
                    </div>

                </div>
            </div>
            <MiniMenu/>
        </>
    )
}
export default MenuDisplay;