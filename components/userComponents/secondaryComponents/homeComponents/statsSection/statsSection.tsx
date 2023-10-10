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
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className={`bg-white shadow-lg w-[90%] lg:w-80 h-[430px] mt-[-130px]`}>
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

                <div className={`bg-white shadow-lg w-[90%] lg:w-80 h-[430px] lg:mt-[-130px]`}>
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

                <div className={`bg-white shadow-lg w-[90%] lg:w-80 h-[430px] lg:mt-[-130px]`}>
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
            <h5 className="text-center mt-6"> <span className="text-light-black">Stop wasting time and money on technology.</span> <span className="underline">Explore our company</span> </h5>

            {/* Find a new way to grow */}
            <div className="flex justify-center gap-10 mt-40">
                <div>
                    <h5 className="text-[13px]"> \\ FIND A NEW WAY FOR GROW \\</h5>
                    <h1 className="text-[25px]"> WIZE WIZE WIZE WIZE </h1>
                    <p className="text-light-black"> AAAAAAAAAAAAAAAA </p>
                    <div className="flex gap-5">
                        <div className="mainGradient relative text-white top-10 p-6 rounded-md h-[120px] w-[120px]">
                            <Circle percent={90} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                        <div className="mainGradient relative text-white top-20 p-6 rounded-md h-[120px] w-[120px]">
                            <Circle percent={30} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                    </div>
                </div>
                <div className="w-1/5 relative z-10">
                    <div className="absolute top-0 z-10">
                        <img src="./images/Helping_Cut.jpg" alt="Teaching" />
                    </div>
                    <div className="z-0 absolute top-[-50px] right-[-50px]">
                        <DotAnimations />
                    </div>
                </div>
            </div>

            {/* Counter */}
            <div className="text-center mt-60 relative">
                <h5 className="text-[13px]"> \\ COUNTER \\</h5>
                <h1 className="text-[25px] text-black"> What we have achieve </h1>
                <div className="bg-white absolute top-[80px] pt-7 pb-7 rounded-md z-10 left-[20%] right-[20%]  shadow-lg">
                    <div className="clientRecords flex justify-evenly items-center">
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
                <div className="z-0 h-[120px] absolute rounded-md mainGradient top-[120px] left-[22%] right-[18%]" />
            </div>

            <div className="flex mt-72 pb-24">
                <div className="w-1/2 pl-[20%] pr-10">
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="bg-white rounded-md p-5 mr-5 shadow-lg">
                                <div className="iconContainer--statsSection w-[20%]">
                                    <PiUsersThreeBold />
                                </div>
                                <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis flex-none">
                                    <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                    <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="bg-white rounded-md p-5 mt-5 shadow-lg">
                                <div className="iconContainer--statsSection w-[20%]">
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
                    <div className="flex mt-10 pr-[50px]">
                        <div className="bg-white rounded-md p-5 mr-5 shadow-lg w-1/2">
                            <div className="iconContainer--statsSection w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className="pt-5 overflow-hidden overflow-ellipsis">
                                <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-5 mt-5 shadow-lg w-1/2">
                            <div className="iconContainer--statsSection w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis">
                                <h1 className="text-[25px] text-black"> AAAAAAAAAAAAAAA </h1>
                                <p className="text-light-black"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h5 className="text-[13px]"> \\ SERVICES \\</h5>
                    <h1 className="text-[25px] text-black"> We Provide Services To Grow Your Buisness </h1>
                    <p className="text-light-black"> AAAAAAAAAAAAAAAAAA </p>
                </div>

            </div>

        </div>
    )
}
export default StatsSection;