import Slider from "react-slick";

const EventUpdatesSection = () => {
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
        <div className="pt-10 pb-20">
            <h5 className="text-[13px] text-grad-one"> \\ NEWS \\</h5>
            <h1 className="text-[25px] mb-5"> Get Event Updates </h1>
            <div className="pl-[16.5%] pr-[16.5%]">
                <Slider {...settingsOne}>

                    <div className="p-5">
                        <img src="./images/Teaching.jpg" alt="Teaching" />
                    </div>


                    <div className="p-5">
                        <img src="./images/Teaching.jpg" alt="Teaching" />
                    </div>


                    <div className="p-5">
                        <img src="./images/Teaching.jpg" alt="Teaching" />
                    </div>

                </Slider>
            </div>
        </div>
    )
}
export default EventUpdatesSection;