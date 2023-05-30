import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const MenuCard = ({ item }) => {
    const { name, image, price, recipe , _id} = item;

    const { user } = useContext(AuthContext);
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = menuitem => {
        if (user && user.email) {
            const cartItem = {menuItemId: _id , name , image , price , email: user.email};
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart.
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to login first !',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login ?'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login" , {state: {from: location}});
                }
            })
        }
    }

    return (
        <div className="card   bg-[#F3F3F3] rounded-none">
            <figure className="relative">
                <img src={image} alt={name} className='w-full' />
                <p className='bg-black text-white font-medium text-xl px-3 py-1 absolute top-3 right-3'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn text-[#BB8506;] btn-outline bg-[#E8E8E8;] hover:text-[#BB8506;] border-0 border-b-2 border-[#BB8506;]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;