import React from "react";

import Link from "next/link";
import EducationAndMigrationDropDown from "../dropDownMenu/educationAndMigrationDropdown";

import "./navigationContainer.css";

interface NavigationContainerProps{
    dispNumber:number,
    setDispNumber:React.Dispatch<React.SetStateAction<number>>,
    showDropDown:boolean,
    setShowDropDown:React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationContainer=({dispNumber,showDropDown,setDispNumber,setShowDropDown}:NavigationContainerProps)=>{
    return (
        <ul className="flex navigationContainer">
            <li className="navigationContainer--noDropDowns">
                <Link href="/" className="mr-12"> Home </Link>
            </li>
            <li className="navigationContainer--noDropDowns">
                <Link href="/about" className="mr-12"> About </Link>
            </li>
            <li className="navigationContainer--noDropDowns">
                <Link href="/events" className="mr-12"> Events </Link>
            </li>
            <li>
                <Link href="/education" className="mr-12 relative" onMouseEnter={()=>{
                    setDispNumber(0);
                    setShowDropDown(true);
                }} onMouseLeave={()=>setShowDropDown(false)}> <label className="navigationContainer--dropDowns">Education</label> </Link>
                <EducationAndMigrationDropDown dispNumber={dispNumber} showDropDown={showDropDown} setShowDropDown={setShowDropDown} showEducationPage={true}/>
            </li>
            <li>
                <Link href="/migration" onMouseEnter={()=>{
                        setDispNumber(1);
                        setShowDropDown(true);    
                }} onMouseLeave={()=>setShowDropDown(false)}> <label className="navigationContainer--dropDowns"> Migration </label></Link>
                <EducationAndMigrationDropDown  dispNumber={dispNumber} showDropDown={showDropDown} setShowDropDown={setShowDropDown} showEducationPage={false}/>
            </li>
        </ul>
    )
}
export default NavigationContainer;