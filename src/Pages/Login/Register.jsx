import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto w-2/5 mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Please Register</h2>
            <Form className='mb-5 '>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold my-2">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="name" placeholder="Enter Name" />
                <label className="block text-gray-700 text-sm font-bold my-2">
                    Photo URL
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="photourl" placeholder="Enter Photo URL" />
                <label className="block text-gray-700 text-sm font-bold my-2">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold my-2">
                    Password
                </label>
                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password"/>
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                <p className="">Do have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                </button>
            </div>
            </Form>
                
        </div>
    );
};

export default Register;