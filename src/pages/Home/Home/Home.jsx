import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
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