"use client"

import Slider from "react-slick";

import NewsFeedSection from "../newsFeedSection/newsFeedSection";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurTeamMembersSection = () => {
    const settingsOne = {
        slidesToShow: 4,
        dots: true,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        infinite: true,
        cssEase: "linear",
    };

    return (
        <div className="pl-[18%] pr-[18%] pt-20 bg-sky-bg">
            <h1 className="text-center text-[40px] mb-10"> Our Team Members </h1>
            <Slider {...settingsOne}>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <h1 className="text-light-black mt-3 uppercase"> Name </h1>
                    <h1 className="uppercase text-grad-one"> Position </h1>
                </div>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <h1 className="text-light-black mt-3 uppercase"> Name </h1>
                    <h1 className="uppercase text-grad-one"> Position </h1>
                </div>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <h1 className="text-light-black mt-3 uppercase"> Name </h1>
                    <h1 className="uppercase text-grad-one"> Position </h1>
                </div>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <h1 className="text-light-black mt-3 uppercase"> Name </h1>
                    <h1 className="uppercase text-grad-one"> Position </h1>
                </div>
            </Slider>
            <NewsFeedSection />
        </div>
    )
}
export default OurTeamMembersSection;