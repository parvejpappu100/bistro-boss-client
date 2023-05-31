import React from 'react';
import { useContext } from 'react';
import { FaCalendar, FaHome, FaPhoneAlt, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';
import useCart from '../../../hooks/useCart';

const UserHome = () => {

    const { user } = useContext(AuthContext);
    const [cart] = useCart();

    return (
        <div className='lg:container mx-auto my-20 px-5'>
            <div className=' flex flex-col md:flex-row gap-5 items-center '>
                <div className='w-full flex items-center p-9 rounded-md  gap-5 text-white bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'>
                    <FaWallet className='text-4xl'></FaWallet>
                    <div>
                        <h5 className='text-3xl font-bold'>205</h5>
                        <p className='font-medium'>Menu</p>
                    </div>
                </div>
                <div className='w-full flex items-center p-9 rounded-md  gap-5 text-white bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'>
                    <FaHome className='text-4xl'></FaHome>
                    <div>
                        <h5 className='text-3xl font-bold'>103</h5>
                        <p className='font-medium'>Shop</p>
                    </div>
                </div>
                <div className='w-full flex items-center p-9 rounded-md  gap-5 text-white bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'>
                    <FaPhoneAlt className='text-4xl'></FaPhoneAlt>
                    <div>
                        <h5 className='text-3xl font-bold'>205</h5>
                        <p className='font-medium'>Menu</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-0  my-10'>
                <div className='flex flex-col items-center w-full justify-center py-20 bg-[#FFEDD5] md:border-r-2 border-[#D1A054]'>
                    <img className='rounded-full h-44 w-44' src={user.photoURL} alt="" />
                    <h3 className='text-2xl title font-bold my-5'>{user.displayName}</h3>
                </div>
                <div className='w-full flex flex-col items-center justify-center py-10 md:py-0 bg-[#FEF9C3]'>
                    <h4 className='uppercase text-3xl title font-semibold'>Your Activities</h4>
                    <div className='text-xl title my-4'>
                        <h3 className='flex items-center gap-2 text-[#0088FE] font-semibold'>
                            <FaShoppingCart></FaShoppingCart>
                            <p>Orders : {cart.length}</p> 
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#00C4A1] font-semibold'>
                            <FaStar></FaStar>
                            <p>Reviews : 2</p> 
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#FFBB28] font-semibold'>
                            <FaCalendar></FaCalendar>
                            <p>Bookings : 2</p> 
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#FF8042] font-semibold'>
                            <FaWallet></FaWallet>
                            <p>Payment : 3</p> 
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;