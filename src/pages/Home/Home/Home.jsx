import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Slider></Slider>
           <Category></Category>
           <BistroBoss></BistroBoss>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;