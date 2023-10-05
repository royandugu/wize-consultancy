import { SiSemanticscholar } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import {GoNote} from "react-icons/go";

import ProgressBar from 'react-bootstrap/ProgressBar';

import "./statsSection.css";

const StatsSection = () => {
    return (
        <div className="statsSection bg-sky-bg">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className={`bg-white shadow-lg w-72 lg+100:w-80 h-[430px] mt-[-130px]`}>
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

                <div className={`bg-white shadow-lg w-72 lg+100:w-80 h-[430px] mt-[-130px]`}>
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

                <div className={`bg-white shadow-lg w-72 lg+100:w-80 h-[430px] mt-[-130px]`}>
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
            <ProgressBar now={50}/>
            <h5 className="text-light"> CLass name </h5>
        </div>
    )
}
export default StatsSection;