import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className='lg:container mx-auto'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 my-10 px-1 lg:px-0'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='flex my-3 justify-center'>
                <Link to="/menu">
                    <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;