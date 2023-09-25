"use client"

import { useState , useEffect } from "react";
import { HiMiniBars3 } from "react-icons/hi2";

import NavigationContainer from "./navigationContainer/navigationContainer";
import MiniMenu from "./miniMenu/miniMenu";
import SearchAndContactDropDown from "./dropDownMenu/searchAndContactDropDown";
import SearchBarDesign from "../../../systemComponents/staticComponents/searchBarDesgin";
import ButtonDesign from "../../../systemComponents/staticComponents/buttonDesign";

import "./menuDisplay.css";
import "../../../systemComponents/commonDesgins/commonDesigns.css";

//{ dispNumberOne, showDropDown, setShowDropDown, showEducationPage}:DropDownMenuProps

const MenuDisplay = () => {

    const [showDropDownOne,setShowDropDownOne]=useState<boolean>(false);
    const [showDropDownTwo,setShowDropDownTwo]=useState<boolean>(false);
    
    const [dispNumberOne,setDispNumberOne]=useState<number>(0);
    const [dispNumberTwo,setDispNumberTwo]=useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setShowDropDownOne(false);
                setShowDropDownTwo(false);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); 

    return (
        <>
            <div className="bg-white fixed top-20 lg:left-20 lg:right-20 left-5 right-5 p-5 rounded-md shadow-lg z-20">
                <div className="flex flex-row items-center xs:justify-between xlg:justify-start">
                    <div className="logoContainer">
                        <h5 className="title"> Logo </h5>
                    </div>

                    <>
                        <div className="navigationContainer md:block hidden px-20">
                            <NavigationContainer dispNumber={dispNumberOne} showDropDown={showDropDownOne} setDispNumber={setDispNumberOne} setShowDropDown={setShowDropDownOne}/>
                        </div>
                        <div className="searchBar xlg:block hidden ml-[-50px] xl:ml-10">
                            <SearchBarDesign/>
                        </div>
                        <div className="contactUs xlg:block hidden">
                            <ButtonDesign/>
                        </div>
                    </>

                    {/* This part is for displaying the dropdown of contact us and search button */}
                    <div className="xlg:hidden cursor-pointer smlContactAndSearchContainer">
                        <HiMiniBars3 className="text-lg" onClick={()=>{
                            setDispNumberTwo(0);
                            setShowDropDownTwo(!showDropDownTwo);
                        }}/>
                        <SearchAndContactDropDown dispNumber={dispNumberTwo} setShowDropDown={setShowDropDownTwo} showDropDown={showDropDownTwo} showAllNavs={false}/>
                    </div>

                    {/* This part is for displaying the dropdown of menu */}
                    <div className="md:hidden cursor-pointer">
                        <HiMiniBars3 className="text-lg" onClick={()=>{
                            setDispNumberTwo(1);
                            setShowDropDownTwo(!showDropDownTwo);
                        }}/>
                        <SearchAndContactDropDown dispNumber={dispNumberTwo} setShowDropDown={setShowDropDownTwo} showDropDown={showDropDownTwo} showAllNavs={true}/>
                    </div>

                </div>
            </div>
            <MiniMenu />
        </>
    )
}
export default MenuDisplay;