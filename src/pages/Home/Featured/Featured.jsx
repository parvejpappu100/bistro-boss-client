import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className='featured-img  text-white bg-fixed'>
            <div className='bg-black bg-opacity-40 px-2 py-5 mt-20 lg:py-20 lg:my-20'>
                <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"}></SectionTitle>
                <div className='lg:container mx-auto flex flex-col md:flex-row gap-10 items-center my-10'>
                    <div className='md:w-3/4 lg:w-2/4'>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='w-full'>
                        <h6>March 20 , 2023</h6>
                        <h3 className='uppercase mt-2'>Where can i get some?</h3>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;