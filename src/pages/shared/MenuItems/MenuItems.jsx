import React from 'react';

const MenuItems = ({item}) => {
    const {name , image , price , recipe} = item;
    return (
        <div className='flex space-x-4 '>
            <img className='w-[104px]' style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}------------</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-yellow-400 font-semibold'>${price}</p>
        </div>
    );
};

export default MenuItems;