import { AiOutlineArrowRight } from "react-icons/ai";

import ButtonDesign from "../../../../systemComponents/staticComponents/buttonDesign";

import "./welcomeSection.css";

const WelcomePage = () => {
    return (
        <div className="welcomeSection">
            <div className="flex pt-40 justify-center gap-0">
                <div className="grid grid-cols-12 mt-5">
                    <div className="lg:col-span-5 md:col-span-5 col-span-12 hidden lg:block">
                        <img src="./images/students.png" className="ml-20"/>
                    </div>
                    <div className="lg:col-span-7 md:col-span-7 col-span-12 mt-20 pr-32">
                        <h1 className="text-grad-one uppercase bp1:text-[25px] text-[10px]"> Welcome to wize </h1>
                        <h1 className="uppercase text-[45px] leading-3 mt-5"> Unlocking <span className="text-grad-one"> wisdom </span></h1>
                        <h1 className="uppercase text-[45px]"> Transforming <span className="text-grad-one"> success </span></h1>
                        <p className="uppercase text-[13px] mb-5"> Discover a world of opportunities with our extensive database of prestigious universities and colleges from around the globe. Whether you are interested in pursuing a bachelor's degree, a master's program, or specialized courses, we've got you covered.</p>

                        <ButtonDesign text={"Learn more"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomePage; 