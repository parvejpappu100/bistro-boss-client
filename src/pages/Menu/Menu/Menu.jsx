import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"

import Banner from '../../shared/Heaer/Banner/Banner';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Banner
                img={menuImg}
                title={"Our Menu"}
                details={"Would you like to try a dish?"}
            ></Banner>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={'Todays offered'}
            ></SectionTitle>
            <MenuCategory items={offered} title={"offered"}></MenuCategory>
            <div className='my-20 '>
                <Banner
                    img={dessertImg}
                    title={'Desserts'}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Banner>
                <MenuCategory items={dessert} title={"desserts"}></MenuCategory>
            </div>
            <div className='my-20'>
                <Banner
                    img={pizzaImg}
                    title={'Pizzas'}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Banner>
                <MenuCategory items={pizza} title={"pizzas"}></MenuCategory>
            </div>
            <div className='my-20'>
                <Banner
                    img={saladImg}
                    title={'Salads'}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Banner>
                <MenuCategory items={salad} title={"salads"}></MenuCategory>
            </div>
            <div className='my-20'>
                <Banner
                    img={soupImage}
                    title={'Soups'}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Banner>
                <MenuCategory items={soup} title={"soups"}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;