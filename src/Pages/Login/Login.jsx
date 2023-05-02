import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import {FaGithub, FaGoogle} from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signInWithEmail,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignIn =(e)=>{
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email,password)
        .then((result)=>{
            const loggedUser = result.user;
            navigate(from,{replace:true});
            form.reset();
        })
        .catch(err=>{
            const msg = err.message.split('/');
            setError(msg[1]);
        })
    }
    return (
        <div className='mx-auto w-4/5 lg:w-2/5 mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Login Page</h2>
            <Form onSubmit={handleSignIn} className='mb-5 '>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password"/>
                <p className="text-red-500 text-xs italic">{error}</p>
                <p className="">Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>
                </div>
                <div className="lg:flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Log In
                </button>
                <Link className="block lg:inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Forgot Password?
                </Link>
            </div>
            </Form>
            <hr className='border '/>

            <div className='mt-10 lg:flex lg:mx-10 gap-4'>
                <button  onClick={signInWithGoogle} className="btn btn-outline btn-secondary" ><FaGoogle className='mr-3'></FaGoogle> Sign In With Google</button>
                <button onClick={signInWithGithub} className="btn btn-outline btn-secondary"><FaGithub className='mr-3'></FaGithub> Sign In With Github</button>
                
            </div>
        </div>
    );
};

export default Login;