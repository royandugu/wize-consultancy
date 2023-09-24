import React from "react";

import { educationRoutes,migrationRoutes } from "../../../../systemComponents/staticComponents/dropDownMenus";

import Link from "next/link";

import "./dropDownMenu.css";

interface DropDownMenuProps{
    dispNumber:number,
    showDropDown:boolean,
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>,
    showEducationPage: boolean
}

const DropDownMenu = ({ dispNumber, showDropDown, setShowDropDown, showEducationPage}:DropDownMenuProps) => {
    
    return (
        <div className={`bg-white rounded-md fixed top-[150px] z-20 transform origin-top transition duration-500 ease-in-out dropDownMenu shadow-lg ${showDropDown ? "scrollDown" : "scrollUp"} `} onMouseEnter={()=>setShowDropDown(true)} onMouseLeave={()=>setShowDropDown(false)}>
            <ul>
                    {(dispNumber === 0 && showEducationPage) && (
                        educationRoutes.map((route,i)=>(
                            <li key={i} className="border-b border-gray-300 px-10 p-5">
                               <Link href={route.url}> {route.text} </Link> 
                            </li>
                        ))
                    )}
            </ul>
            <ul>
                    {(dispNumber === 1 && !showEducationPage) && (
                        migrationRoutes.map((route,i)=>(
                            <li key={i} className="border-b border-gray-300 px-10 p-5">
                               <Link href={route.url}> {route.text} </Link> 
                            </li>
                        ))
                    )}
            </ul>

        </div>
    );
}

export default DropDownMenu;