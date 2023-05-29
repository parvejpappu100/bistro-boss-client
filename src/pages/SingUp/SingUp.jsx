import React, { useState } from 'react';
import loginImg from "../../assets/others/authentication2.png"
import loginBg from "../../assets/others/authentication.png"
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const SingUp = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [singUpError , setSingUpError] = useState("");

    const from = location.state?.from?.pathname || "/";

    const { googleSingIn, setUser, createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserData(user , data.name , data.photoURL);
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User create successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from , {replace: true});
            })
            .catch(error => {
                setSingUpError(error.message)
            })

    };

    const updateUserData = (user , name , photo) => {
        updateProfile(user , {
            displayName: name , 
            photoURL: photo
        })
        .then( () => {

        })
        .catch(error => {

        })
    }

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from , {replace: true});
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='py-32' style={{ backgroundImage: `url("${loginBg}")` }}>
            <Helmet>
                <title>Sing Up | Bistro Boss Restaurant</title>
            </Helmet>
            <div className='lg:container mx-auto py-24 shadow-2xl flex flex-col md:flex-row-reverse items-center justify-center gap-5'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-full md:w-2/4 lg:w-2/5 py-10 md:mr-2'>
                    <h3 className='text-center text-3xl font-semibold'>Sing Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 lg:w-2/3 mx-auto'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your name" name='name' className="input input-bordered " />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Your photo url"  className="input input-bordered " />
                            {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="Your email" name='email' className="input input-bordered " />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Your Password" name='password' className="input input-bordered " />
                            {errors.password?.type == "required" && <span className='text-red-600'>Password is required.</span>}
                            {errors.password?.type == "minLength" && <span className='text-red-600'>Password should be at least 6 characters.</span>}
                            {errors.password?.type == "maxLength" && <span className='text-red-600'>Password should be maximum 20 characters</span>}
                            {errors.password?.type == "pattern" && <span className='text-red-600'>Password should be at least one uppercase, one lowercase , one digit and one special character</span>}
                        </div>
                        <input type="submit" value="Login" className='w-full btn border-0 normal-case bg-[#D1A054] hover:bg-[#D1A054] hover:bg-opacity-75 py-3 my-5 rounded-md font-semibold' />
                    </form>
                    <p className="text-red-400 text-center font-semibold">{singUpError}</p>
                    <div className='w-2/3 mx-auto'>
                        <h6 className='text-center my-3 font-semibold'>Or sing with</h6>
                        <div className='flex gap-10 items-center justify-center my-5'>
                            <button onClick={handleGoogleLogin} className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGoogle></FaGoogle></button>
                            <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGithub></FaGithub></button>
                            <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        </div>
                        <p className='text-center text-[#D1A054;]'>Already registered ? <Link to="/login" className='hover:underline font-semibold'>Go to login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;