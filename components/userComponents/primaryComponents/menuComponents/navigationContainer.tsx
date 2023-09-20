import Link from "next/link";

const NavigationContainer=()=>{
    return (
        <ul className="flex justify-around">
            <li>
                <Link href="/"> Home </Link>
            </li>
            <li>
                <Link href="/events"> About </Link>
            </li>
            <li>
                <Link href="/"> Events </Link>
            </li>
            <li>
                <Link href="/"> Migration </Link>
            </li>
        </ul>
    )
}
export default NavigationContainer;