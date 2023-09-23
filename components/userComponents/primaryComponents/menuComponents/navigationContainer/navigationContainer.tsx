import Link from "next/link";

import "./navigationContainer.css";

const NavigationContainer=()=>{
    return (
        <ul className="flex navigationContainer">
            <li>
                <Link href="/" className="mr-12"> Home </Link>
            </li>
            <li>
                <Link href="/events" className="mr-12"> About </Link>
            </li>
            <li>
                <Link href="/" className="mr-12"> Events </Link>
            </li>
            <li>
                <Link href="/" className="mr-12"> Education </Link>
            </li>
            <li>
                <Link href="/"> Migration </Link>
            </li>
        </ul>
    )
}
export default NavigationContainer;