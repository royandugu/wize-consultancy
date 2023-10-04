import ButtonDesign from "../../../../systemComponents/staticComponents/buttonDesign";

import "./welcomeSection.css";

const WelcomePage = () => {
    return (
        <div className="welcomeSection">
            <div className="flex pt-40 justify-center gap-0">
                <div className="grid grid-cols-12 mt-5">
                    <div className="md:col-span-5 col-span-12 hidden md:block">
                        <img src="./images/students.png" className="ml-20"/>
                    </div>
                    <div className="md:col-span-7 col-span-12 xl+70:mt-20 mt-[9%] pr-20 pl-20 md:pr-32 md:pl-0 md:text-left">
                        <h1 className="text-grad-one uppercase xl+70:text-[25px] text-[15px]"> Welcome to wize </h1>
                        <h1 className="uppercase text-[25px] xl+70:text-[45px] leading-3 mt-5"> Unlocking <span className="text-grad-one"> wisdom </span></h1>
                        <h1 className="uppercase xl+70:text-[45px] text-[25px]"> Transforming&nbsp;<span className="text-grad-one">success </span></h1>
                        <p className="uppercase xl+70:text-[13px] mb-5 hidden xl+70:block"> Discover a world of opportunities with our extensive database of prestigious universities and colleges from around the globe. Whether you are interested in pursuing a bachelor's degree, a master's program, or specialized courses, we've got you covered.</p>
                        <p className="uppercase text-[13px] mb-5 xl+70:hidden mt-3"> Discover a world of opportunities with our extensive database of prestigious universities and colleges from around the globe. Whether you are interested in pursuing a bachelor's degree, a master's program, or specialized courses, we've got you covered.</p>

                        <ButtonDesign text={"Learn more"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomePage; 