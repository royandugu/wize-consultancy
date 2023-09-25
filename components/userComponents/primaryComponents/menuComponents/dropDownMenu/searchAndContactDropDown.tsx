import { AiOutlineArrowRight } from "react-icons/ai"

import SearchBarDesign from "../../../../systemComponents/staticComponents/searchBarDesgin"
import ButtonDesign from "../../../../systemComponents/staticComponents/buttonDesign"

interface DropDownMenuProps{
    dispNumber:number,
    showDropDown:boolean,
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>,
    showAllNavs: boolean
}

const SearchAndContactDropDown=({ dispNumber, showDropDown, setShowDropDown, showAllNavs}:DropDownMenuProps)=>{
    return (
        <div className={`bg-white rounded-md fixed top-[150px] right-12 z-20 transform origin-top transition duration-500 ease-in-out dropDownMenu shadow-lg ${showDropDown ? "scrollDown" : "scrollUp"} `} onMouseEnter={()=>setShowDropDown(true)} onMouseLeave={()=>setShowDropDown(false)}>
            <ul>
                {dispNumber === 0 && (
                    <div className="flex px-5 p-5 mr-20">
                        <SearchBarDesign/>
                        <ButtonDesign/>
                    </div>
                    
                )}
            </ul>
            <ul>
                {dispNumber === 1 && (
                    <h5> This is display 1 </h5>
                )}
            </ul>
        </div>
    );
}
export default SearchAndContactDropDown;