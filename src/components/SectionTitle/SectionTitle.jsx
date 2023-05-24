import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='mt-20 mb-10 text-center md:w-[324px] mx-auto'>
            <p className='text-yellow-500 italic font-medium'>--- {subHeading} ---</p>
            {/* <hr  className='w-[324px] h-1 bg-gray-200 my-2 mx-auto'/> */}
            <h4 className='text-3xl uppercase my-4 font-medium border-y-4 py-4'>{heading}</h4>
            {/* <hr  className='w-[324px] h-1 bg-gray-200  mx-auto'/> */}
        </div>
    );
};

export default SectionTitle;