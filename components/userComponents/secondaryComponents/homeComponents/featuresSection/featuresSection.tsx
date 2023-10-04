import { SiSemanticscholar } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import {GoNote} from "react-icons/go";

import "./featuresSection.css";

const FeaturesSection = () => {    
    return (
        <div className="featuresContainer relative text-center pt-5 pb-40 bg-black">
            <h5 className="text-[13px] mt-5"> \\FEATURES\\ </h5>
            <h1 className="text-[25px]"> Explore your options </h1>
            <div className="flex justify-center space-x-12 absolute top-[320px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`bg-white shadow-lg w-80 h-[400px]`}>
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <GoNote className="icon text-[40px]" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-[20px]"> Personalized Guidance </h1>
                            <p className="mt-2 text-sm">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-80 h-[400px]`}>
                    <img src="./images/Scholarship.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <SiSemanticscholar className="icon text-[40px]" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-[20px]"> Scholarship Guidance </h1>
                            <p className="mt-2 text-sm">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-80 h-[400px]`}>
                    <img src="./images/Helping.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <TfiCup className="icon text-[40px]" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-[20px]"> Streamlined Support </h1>
                            <p className="mt-2 text-sm">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturesSection;