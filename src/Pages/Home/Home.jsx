import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import LatestRecepi from './LatestRecepi';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='font-serif'>
        <Banner></Banner>
        <ChefSection></ChefSection>
        <LatestRecepi></LatestRecepi>
        <Contact></Contact>

        </div>
    );
};

export default Home;