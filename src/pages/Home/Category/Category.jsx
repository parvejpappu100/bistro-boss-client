import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='lg:container mx-auto my-10 px-2 md:px-0'>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"---From 11:00am to 10:00pm---"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full ' src={slide1} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Vegetables</h4>
                </SwiperSlide>
                <SwiperSlide className='border'>
                    <img className='w-full' src={slide1} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <h4 className='md:text-2xl lg:text-3xl text-center -mt-10 uppercase text-white'>Pizzas</h4>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;