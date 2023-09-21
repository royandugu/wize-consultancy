import Link from "next/link";

const NavigationContainer=()=>{
    return (
        <ul className="flex navigationContainer">
            <li>
                <Link href="/" className="mr-20"> Home </Link>
            </li>
            <li>
                <Link href="/events" className="mr-20"> About </Link>
            </li>
            <li>
                <Link href="/" className="mr-20"> Events </Link>
            </li>
            <li>
                <Link href="/"> Migration </Link>
            </li>
        </ul>
    )
}
export default NavigationContainer;