import React from 'react';
import MenuItems from '../../shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items , title }) => {
    return (
        <div>
            <div className='lg:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 my-20 px-1 lg:px-0 '>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='flex my-3 justify-center'>
                <Link to={`/ourShop/${title}`}>
                    <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;