import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from "../../assets/others/authentication2.png"
import loginBg from "../../assets/others/authentication.png"
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [disable, setDisable] = useState(true);
    const [logInError , setLogInError] = useState("");
    const emailRef = useRef();
    const { googleSingIn, setUser, singIn , restPassword } = useContext(AuthContext);

    const captchaRef = useRef(null);
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value, false)) {
            setDisable(false)
        }
        else {
            setDisable(true);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setLogInError("");
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
                setLogInError(error.message);
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
    };

    const handleRestPassword = () => {
        const email = emailRef.current.value;
        if(! email){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please provide a valid email!',
              })
        };
        restPassword(email)
        .then( () => {
            Swal.fire('Check your email please !!')
        })
    }

    return (
        <div className='py-32' style={{ backgroundImage: `url("${loginBg}")` }}>
            <Helmet>
                <title>Login | Bistro Boss Restaurant</title>
            </Helmet>
            <div className='lg:container mx-auto py-24 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-5'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-full md:w-2/4 lg:w-2/5 py-10 md:mr-2'>
                    <h3 className='text-center text-3xl font-semibold'>Login</h3>
                    <form onSubmit={handleLogin} className='w-4/5 lg:w-2/3 mx-auto'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input ref={emailRef} type="text" placeholder="Your email" name='email' required className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" name='password' required className="input input-bordered " />
                            <label className="label">
                                <a onClick={handleRestPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onChange={handleValidateCaptcha} ref={captchaRef} type="text" name='captcha' placeholder="Type Here" className="input input-bordered " />
                        </div>
                        <input disabled={disable} type="submit" value="Login" className='w-full btn border-0 normal-case bg-[#D1A054] hover:bg-[#D1A054] hover:bg-opacity-75 py-3 my-5 rounded-md font-semibold' />
                    </form>
                    <p className="text-red-400 text-center font-semibold">{logInError}</p>
                    <div className='w-2/3 mx-auto'>
                        <h6 className='text-center my-3 font-semibold'>Or sing with</h6>
                        <div className='flex gap-10 items-center justify-center my-5'>
                            <button onClick={handleGoogleLogin} className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGoogle></FaGoogle></button>
                            <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGithub></FaGithub></button>
                            <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        </div>
                        <p className='text-center text-[#D1A054;]'>New here ? <Link to="/singUp" className='hover:underline font-semibold'>Create a New Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;