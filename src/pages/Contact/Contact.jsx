import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../shared/Heaer/Banner/Banner';
import bgImg from "../../assets/contact/banner.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaPhoneAlt, FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Banner
                img={bgImg}
                title={"Contact Us"}
                details={"Would you like to contact us?"}
            ></Banner>
            <SectionTitle
                subHeading={'Visit Us'}
                heading={"Our Location"}
            ></SectionTitle>
            <div className='lg:container mx-auto grid grid-cols-1 md:grid-cols-3 px-2 gap-5'>
                <div className='border text-center '>
                    <div className='bg-[#D1A054] text-white w-full py-5'>
                        <FaPhoneAlt className='text-3xl mx-auto'></FaPhoneAlt>
                    </div>
                    <div className='bg-[#F3F3F3] py-10 mx-6 mb-6'>
                        <h5 className='uppercase text-2xl font-semibold'>PHONE</h5>
                        <p>+38 (012) 34 56 789</p>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='border text-center '>
                    <div className='bg-[#D1A054] text-white w-full py-5'>
                        <FaMapMarkerAlt className='text-3xl mx-auto'></FaMapMarkerAlt>
                    </div>
                    <div className='bg-[#F3F3F3] py-10 mx-6 mb-6'>
                        <h5 className='uppercase text-2xl font-semibold'>ADDRESS</h5>
                        <p>Dhaka , Bangladesh</p>
                        <p>Dhaka , Bangladesh</p>
                    </div>
                </div>
                <div className='border text-center '>
                    <div className='bg-[#D1A054] text-white w-full py-5'>
                        <FaStopwatch className='text-3xl mx-auto'></FaStopwatch>
                    </div>
                    <div className='bg-[#F3F3F3] py-10 mx-6 mb-6'>
                        <h5 className='uppercase text-2xl font-semibold'>WORKING HOURS</h5>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;