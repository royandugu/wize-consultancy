import {BiSolidMessageDetail} from "react-icons/bi";

const Footer = () => {
    return (
        <div className="footer bg-black text-white pt-20 pl-[10%] pr-[10%]">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-white text-[30px]"> SUBSCRIBE TO OUR NEWS LETTER </h1>
                    <h1 className="text-white text-[30px]"> FOR LATEST UPDATE </h1>
                </div>
                <div>
                    <input type="text" className="bg-white rounded-md h-[50px]" />
                    <button className="bg-black text-white"> Subscribe </button>
                </div>
            </div>
            <div className="flex gap-[20%] mt-10 border-t border-gray-300 border-dotted pt-10 text-white pb-10">
                <div>
                    <h1 className="underline text-[30px]"> Logo </h1>
                    <p className="text-white mt-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <div className="flex items-center">
                        <div className="h-12 w-12 mainGradient rounded-[50%] relative mt-10">
                        </div>
                        <h5 className="mt-9 ml-2"> Phone number </h5>
                    </div>
                    <div className="flex items-center">
                        <div className="h-12 w-12 mainGradient rounded-[50%] relative mt-5">
                        
                        </div> 
                        <h5 className="mt-4 ml-2"> Email </h5>
                    </div>
                </div>
                <div>
                    <h1> Student&nbsp;services </h1>
                    <ul>
                        <li className="mt-5"> Oversea&nbsp;university&nbsp;enrollment</li>
                        <li className="mt-2"> Visa&nbsp;Application</li>
                        <li className="mt-2"> PTE&nbsp;Test&nbsp;Preparation</li>
                        <li className="mt-2"> IELTS&nbsp;training</li>
                        <li className="mt-2"> Study&nbsp;Abroad&nbsp;Acommodation</li>
                        <li className="mt-2"> Student&nbsp;Health&nbsp;Insurance</li>
                        <li className="mt-2"> Booking&nbsp;in&nbsp;Australia</li>
                    </ul>
                </div> 
                <div>
                    <h1> About </h1>
                    <ul>
                        <li className="mt-5"> About&nbsp;us</li>
                        <li className="mt-2"> Message&nbsp;from&nbsp;Director</li>
                        <li className="mt-2"> PTE&nbsp;Test&nbsp;Preparation</li>
                        <li className="mt-2"> Location&nbsp;3</li>
                        <div className="flex items-center">
                            <BiSolidMessageDetail className="text-[60px] mainGradient-txt mt-10"/>
                            <div>
                                <h5 className="mt-7 ml-2"> Need&nbsp;for&nbsp;consultation </h5>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;