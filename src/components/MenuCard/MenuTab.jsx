import React from 'react';
import MenuCard from './MenuCard';

const MenuTab = ({tabItems}) => {
    return (
        <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                tabItems.map(tabItem => <MenuCard key={tabItem._id} item={tabItem}></MenuCard>)
            }
        </div>
    );
};

export default MenuTab;