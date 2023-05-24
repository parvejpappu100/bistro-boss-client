import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Category></Category>
           <BistroBoss></BistroBoss>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;