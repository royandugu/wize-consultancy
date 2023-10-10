import { Swiper, SwiperSlide } from "swiper/react";

const EventUpdatesSection = () => {
    return (
        <div className="pt-10 pb-20">
            <h5 className="text-[13px] text-grad-one"> \\ NEWS \\</h5>
            <h1 className="text-[25px] mb-5"> Get Event Updates </h1>
            <div className="pl-[16.5%] pr-[16.5%]">
                <Swiper spaceBetween={10}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 5000
                    }}>
                    <SwiperSlide>
                        <div className="p-5">
                            <img src="./images/Teaching.jpg" alt="Teaching" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-5">
                            <img src="./images/Teaching.jpg" alt="Teaching" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-5">
                            <img src="./images/Teaching.jpg" alt="Teaching" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default EventUpdatesSection;