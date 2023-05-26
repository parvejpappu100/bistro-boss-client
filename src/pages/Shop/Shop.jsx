import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../shared/Heaer/Banner/Banner';
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import MenuCard from '../../components/MenuCard/MenuCard';


const Shop = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

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
                <Tabs>
                    <div className='text-center font-semibold'>
                        <TabList>
                            <Tab>SALADS</Tab>
                            <Tab>PIZZAS</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                            {
                                salads.map(salad => <MenuCard key={salad._id} item={salad}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                            {
                                pizzas.map(pizza => <MenuCard key={pizza._id} item={pizza}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                            {
                                soups.map(soup => <MenuCard key={soup._id} item={soup}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                            {
                                desserts.map(dessert => <MenuCard key={dessert._id} item={dessert}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                            {
                                drinks.map(drink => <MenuCard key={drink._id} item={drink}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;