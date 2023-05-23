import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row  text-white mt-20'>
                <div className='justify-end  grid w-full bg-[#1F2937]'>
                    <div className=' w-full   p-20 '>
                        <h6 className='text-2xl font-medium mb-5 lg:text-center'>CONTACT US</h6>
                        <div className='flex flex-col lg:items-center'>
                            <p>123 ABS Street, Uni 21, Bangladesh </p>
                            <p> +88 123456789 </p>
                            <p>Mon - Fri: 08:00 - 22:00 </p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#111827] p-20'>
                    <h6 className='text-2xl mb-5'>Follow Us</h6>
                    <p>Join us on social media</p>
                    <div className='flex gap-4 text-xl mt-5'>
                        <a href="#"><FaFacebookF></FaFacebookF></a>
                        <a href="#"><FaInstagram></FaInstagram></a>
                        <a href="#"><FaTwitter></FaTwitter></a>
                    </div>
                </div>
            </div>
            <footer className="p-4 bg-black  text-white">
                <div >
                    <p className="text-center">Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;