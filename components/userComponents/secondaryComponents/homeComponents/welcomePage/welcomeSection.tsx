import ButtonDesign from "../../../../systemComponents/staticComponents/buttonDesign";

import "./welcomeSection.css";

const WelcomePage=()=>{
    return(
        <div className="welcomeSection">
            <div className="flex pt-40 justify-center gap-10">
                <div className="w-1/2 mt-10">
                    <img src="./images/students.png"/>
                </div>
                <div className="w-1/2 mt-10 pr-32 pt-20">
                    <h1 className="text-grad-one uppercase text-[25px]"> Welcome to wize </h1>
                    <h1 className="uppercase text-[45px] leading-3 mt-5"> Unlocking <span className="text-grad-one"> wisdom </span></h1>
                    <h1 className="uppercase text-[45px]"> Transforming <span className="text-grad-one"> success </span></h1>
                    <p className="uppercase text-[13px]"> Discover a world of opportunities with our extensive database of prestigious universities and colleges from around the globe. Whether you are interested in pursuing a bachelor's degree, a master's program, or specialized courses, we've got you covered.</p>
                    <ButtonDesign/>
                </div>
            </div>
        </div>
    )
}
export default WelcomePage; 