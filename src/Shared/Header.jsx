import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <div className="navbar bg-base-100 font-bold px-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 gap-4 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink></li>
                    <li><NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : 'default')}>Register</NavLink></li>
                </ul>
                </div>
                <Link className="normal-case font-bold text-2xl">BanglaFood</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-4 menu-horizontal px-1">
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink></li>
                    <li><NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : 'default')}>Register</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                    <ul className='menu gap-4 menu-horizontal px-1'>
                    <li><Link className='btn btn-outline'>Log Out</Link></li>
                    </ul>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" title='shakil' />
                    </div>
            </label>
            </div>
            </div>
    );
};

export default Header;