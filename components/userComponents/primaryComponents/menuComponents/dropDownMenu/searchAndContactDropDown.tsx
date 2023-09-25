import { AiOutlineSearch } from "react-icons/ai"
import SearchBarDesign from "../../../../systemComponents/staticComponents/searchBarDesgin"
import ButtonDesign from "../../../../systemComponents/staticComponents/buttonDesign"
import Link from "next/link"

interface DropDownMenuProps {
    dispNumber: number,
    showDropDown: boolean,
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>,
    showAllNavs: boolean
}

const SearchAndContactDropDown = ({ dispNumber, showDropDown, setShowDropDown, showAllNavs }: DropDownMenuProps) => {
    return (
        <div className={`bg-white rounded-md fixed top-[150px] right-12 z-20 transform origin-top transition duration-500 ease-in-out dropDownMenu shadow-lg ${showDropDown ? "scrollDown" : "scrollUp"} `}>
            {dispNumber === 0 ? (
                <div className="flex px-5 p-5 mr-20">
                    <SearchBarDesign />
                    <ButtonDesign />
                </div>

            ) : dispNumber === 1 && (
                <ul className="p-5">
                    <li className="navigationContainer--noDropDowns">
                        <Link href="/"> Home </Link>
                    </li>
                    <li className="navigationContainer--noDropDowns mt-2">
                        <Link href="/events"> About </Link>
                    </li>
                    <li className="navigationContainer--noDropDowns mt-2">
                        <Link href="/"> Events </Link>
                    </li>
                    <li className="mt-2">
                        <Link href="/" className="relative"> <label className="navigationContainer--dropDowns">Education</label> </Link>
                    </li>
                    <li className="mt-2">
                        <Link href="/"> <label className="navigationContainer--dropDowns"> Migration </label></Link>
                    </li>
                    <div className="mt-5">
                        <div className="flex relative">
                            <AiOutlineSearch className="absolute top-1" />
                            <input type="text" className="border border-t-0 border-l-0 border-r-0 outline-none border-b-black pl-7" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <ButtonDesign />
                    </div>
                </ul>
            )}
        </div>
    );
}
export default SearchAndContactDropDown;