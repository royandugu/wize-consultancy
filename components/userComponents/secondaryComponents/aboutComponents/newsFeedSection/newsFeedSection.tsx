"use client"

import Slider from "react-slick";


const NewsFeedSection = () => {
    
    const settingsOne = {
        slidesToShow: 3,
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
        <div className="text-center pt-20 pb-20">
            <h1 className="text-[25px] text-grad-one"> // NEWS //</h1>
            <h1 className="text-[40px] mb-5"> NEWS FEED </h1>
            <Slider {...settingsOne}>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <div className="bg-white pt-5 pb-5">
                        <h1> Some content </h1>
                    </div>
                </div>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <div className="bg-white pt-5 pb-5">
                        <h1> Some content </h1>
                    </div>
                </div>
                <div className="pr-5 text-center">
                    <img src="./images/Teaching.jpg" alt="Teaching" />
                    <div className="bg-white pt-5 pb-5">
                        <h1> Some content </h1>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default NewsFeedSection;