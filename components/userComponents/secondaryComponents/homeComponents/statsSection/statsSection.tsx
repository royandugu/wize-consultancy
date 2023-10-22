"use client"

import { SiSemanticscholar } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { GoNote } from "react-icons/go";
import { Circle } from "rc-progress";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";

import DotAnimations from "../../../../systemComponents/animations/dotAnimations";

import "./statsSection.css";

const StatsSection = () => {
    return (
        <div className="statsSection bg-sky-bg mb-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:pl-20 sm:pr-20">
                <div className={`bg-white shadow-lg w-[90%] md:w-80 mt-[-130px] statCard pb-3`}>
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <GoNote className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            <h1 className="text-[20px] title--statsSection"> Personalized Guidance </h1>
                            <p className="mt-2 text-sm para--statsSection">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-[90%] md:w-80 md:mt-[-130px] statCard pb-3`}>
                    <img src="./images/Scholarship.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <SiSemanticscholar className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            <h1 className="text-[20px] title--statsSection"> Scholarship Guidance </h1>
                            <p className="mt-2 text-sm para--statsSection">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-[90%] md:w-80 pb-3 md:mt-[-130px] statCard`}>
                    <img src="./images/Helping.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <TfiCup className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            <h1 className="text-[20px] title--statsSection"> Streamlined Support </h1>
                            <p className="mt-2 text-sm para--statsSection">
                                In the ever-evolving world of consultancy, achieving success
                                requires more than just knowledge; it demands a strategic and
                                personalized approach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-20 pr-20">
                <h5 className="text-center mt-6"> <span className="text-light-black">Stop wasting time and money on technology.</span> <span className="underline">Explore our company</span> </h5>
            </div>

            {/* Find a new way to grow */}
            <div className="flex flex-col md:flex-row justify-center md:gap-10 mt-20 md:mt-40">
                <div className="text-center md:text-left"><h5 className="text-[13px]"> \\ FIND A NEW WAY FOR GROW \\</h5>
                    <h1 className="text-[25px]"> WIZE WIZE WIZE WIZE </h1>
                    <p className="text-light-black"> AAAAAAAAAAAAAAAA </p>
                    <div className="flex gap-5 justify-center pl-24 pr-24 md:pl-0 md:pr-0 md:justify-start">
                        <div className="mainGradient relative text-white top-10 p-6 w-full rounded-md md:h-[120px] md:w-[120px]">
                            <Circle percent={90} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                        <div className="mainGradient relative text-white top-20 p-6 rounded-md w-full mdh-[120px] md:w-[120px]">
                            <Circle percent={30} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/5 relative z-10">
                    <div className="md:absolute top-0 z-10 pl-28 pr-28 pt-48 md:pl-0 md:pr-0 md:pt-0">
                        <img src="./images/Helping_Cut.jpg" alt="Teaching" className="w-full h-auto" />
                    </div>
                    <div className="z-0 absolute top-[120px] md:top-[-50px] right-[30px] md:right-[-50px]">
                        <DotAnimations />
                    </div>
                </div>
            </div>

            {/* Counter */}
            <div className="text-center pt-[100px] md:pt-0 md:mt-60 relative">
                <h5 className="text-[13px]"> \\ COUNTER \\</h5>
                <h1 className="text-[25px] text-black"> What we have achieve </h1>
                <div className="pl-20 md:pl-0 pr-20 md:pr-0">
                    <div className="bg-white md:absolute mt-5 md:mt-0 md:top-[80px] pt-7 pb-7 rounded-md z-10 left-[20%] right-[20%]  shadow-lg">
                        <div className="clientRecords flex flex-col md:flex-row justify-evenly items-center">
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    <h5> 9999+ </h5>
                                    <p className="text-light-black"> Happy clients </p>
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    <h5> 9999+ </h5>
                                    <p className="text-light-black"> Happy clients </p>
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    <h5> 9999+ </h5>
                                    <p className="text-light-black"> Happy clients </p>
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="text-[60px] text-grad-two icon" />
                                <div className="ml-1">
                                    <h5> 9999+ </h5>
                                    <p className="text-light-black"> Happy clients </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="z-0 h-[120px] hidden md:block absolute rounded-md mainGradient top-[120px] left-[22%] right-[18%]" />
            </div>

            <div className="flex flex-col md:flex-row mt-10 md:mt-72 pb-24">
                <div className="md:w-1/2 pl-[20%] pr-[20%] md:pr-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <div className="bg-white rounded-md p-5 mr-5 shadow-lg">
                                <div className="iconContainer--statsSection md:w-[20%]">
                                    <PiUsersThreeBold />
                                </div>
                                <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis flex-none">
                                    <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                    <p className="text-light-black">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white rounded-md p-5 mt-5 shadow-lg">
                                <div className="iconContainer--statsSection md:w-[20%]">
                                    <PiUsersThreeBold />
                                </div>
                                <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis self-start">
                                    <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                    <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                                    <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>

                                    <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-10 pr-[50px]">
                        <div className="bg-white rounded-md p-5 mr-5 shadow-lg md:w-1/2">
                            <div className="iconContainer--statsSection md:w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className="pt-5 overflow-hidden overflow-ellipsis">
                                <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-5 mt-5 shadow-lg md:w-1/2">
                            <div className="iconContainer--statsSection md:w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis">
                                <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 pt-14 text-center pl-[10%] pr-[10%] md:pt-0 md:text-left md:pl-0 md:pr-0">
                    <h5 className="text-[13px]"> \\ SERVICES \\</h5>
                    <h1 className="text-[25px] text-black"> We Provide Services To Grow Your Buisness </h1>
                    <p className="text-light-black mt-5"> AAAAAAAAAAAAAAAAAA </p>
                </div>

            </div>

        </div>
    )
}
export default StatsSection;