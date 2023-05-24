import React from 'react';
import img from "../../../assets/home/chef-service.jpg"

const BistroBoss = () => {
    return (
        <div className='lg:container mx-auto mt-32 relative hidden md:block'>
            <img src={img} alt="" />
            <div className='absolute inset-0  text-center w-4/5 h-2/4 mx-auto bg-white  my-auto flex justify-center items-center md:px-10 lg:px-20'>
                <div>
                    <h4 className='text-3xl uppercase mb-2'>Bistro Boss</h4>
                    <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;