"use client"

import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import EventUpdatesSection from "../eventUpdatesSection/eventUpdatesSection";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSection = () => {

    return (
        <div className="bg-sky-bg pt-10 text-center">
            <h5 className="text-[13px] text-grad-one"> \\ FEATURES \\</h5>
            <h1 className="text-[25px]"> Our Testimonials </h1>
            <div className="pl-[16.5%] pr-[16.5%]">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 5000
                    }}

                >
                    <SwiperSlide>
                        <div className="p-5">
                            <div className="flex bg-white shadow-lg p-5">
                                <div className="w-1/3">

                                </div>
                                <div className="w-2/3 text-left">
                                    <p> adadfadfadf </p>
                                    <h1> Name </h1>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-5">
                            <div className="flex bg-white shadow-lg p-5">
                                <div className="w-1/3">

                                </div>
                                <div className="w-2/3">
                                    <p> adadfadfadf </p>
                                    <h1> Name </h1>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-5">
                            <div className="flex bg-white shadow-lg p-5">
                                <div className="w-1/3">

                                </div>
                                <div className="w-2/3">
                                    <p> adadfadfadf </p>
                                    <h1> Name </h1>
                                
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-5">
                            <div className="flex bg-white shadow-lg p-5">
                                <div className="w-1/3">

                                </div>
                                <div className="w-2/3">
                                    <p> adadfadfadf </p>
                                    <h1> Name </h1>
                                
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h5> Test three </h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h5> Test three </h5>
                    </SwiperSlide>
                </Swiper>
            </div>
            <EventUpdatesSection/>
        </div>

    )
}
export default TestimonialSection;