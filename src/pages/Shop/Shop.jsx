import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../shared/Heaer/Banner/Banner';
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import MenuTab from '../../components/MenuCard/MenuTab';
import { useParams } from 'react-router-dom';


const Shop = () => {

    const categories = ["salads", "pizzas", "soups", "desserts", "drinks" , "offered"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Banner
                img={shopImg}
                title={"Our Shop"}
                details={"Would you like to try a dish?"}
            ></Banner>
            <div className='lg:container mx-auto  my-20'>
                <Tabs defaultIndex={tabIndex} onSelect={(index => setTabIndex(index))}>
                    <div className='text-center font-semibold'>
                        <TabList>
                            <Tab>SALADS</Tab>
                            <Tab>PIZZAS</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                            <Tab>OFFERED</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <MenuTab tabItems={salads}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab tabItems={pizzas}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab tabItems={soups}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab tabItems={desserts}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab tabItems={drinks}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab tabItems={offered}></MenuTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;