import React from 'react';

const MenuCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100  bg-[#F3F3F3;] rounded-none">
            <figure className="relative">
                <img src={image} alt={name} className='w-full' />
                <p className='bg-black text-white font-medium text-xl px-3 py-1 absolute top-3 right-3'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn text-[#BB8506;] btn-outline bg-[#E8E8E8;] hover:text-[#BB8506;] border-0 border-b-2 border-[#BB8506;]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;