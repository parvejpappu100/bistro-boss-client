import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularMenus = data.filter(item => item.category === "popular");
                setPopularMenu(popularMenus);
            })
    }, [])

    return (
        <section className='lg:container mx-auto'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 my-10 px-1 lg:px-0'>
                {
                    popularMenu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='flex my-3 justify-center'>
                <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;