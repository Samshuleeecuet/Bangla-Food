import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Header></Header>
        <div className='min-h-[calc(100vh-112px)]'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default Main;