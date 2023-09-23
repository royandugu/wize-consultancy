import {HiMiniBars3} from "react-icons/hi2";
import {AiOutlineSearch, AiOutlineArrowRight} from "react-icons/ai";

import NavigationContainer from "./navigationContainer/navigationContainer";
import MiniMenu from "./miniMenu/miniMenu";

import "./menuDisplay.css";
import "../../../systemComponents/commonDesgins/commonDesigns.css";

const MenuDisplay = () => {
    return (
        <>
            <div className="bg-white fixed top-20 lg:left-20 lg:right-20 left-5 right-5 p-5 rounded-md shadow-lg z-20">
                <div className="flex flex-row items-center xs:justify-between lg:justify-start">
                    <div className="logoContainer">
                        <h5 className="title"> Logo </h5>
                    </div>

                    <>
                        <div className="navigationContainer lg:block hidden px-20">
                            <NavigationContainer />
                        </div>
                        <div className="searchBar lg:block hidden xl:ml-10">
                            <div className="flex relative">
                                <AiOutlineSearch className="absolute top-1"/>
                                <input type="text" className="border border-t-0 border-l-0 border-r-0 outline-none border-b-black mr-10 pl-10" placeholder="Enter name"/>
                            </div>
                        </div>
                        <div className="contactUs lg:block hidden">
                            <div className="mainGradient pl-10 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
                                 <p> Contact Us </p> 
                                 <button className="bg-grad-two p-1 ml-3"> <AiOutlineArrowRight/> </button> 
                            </div>
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