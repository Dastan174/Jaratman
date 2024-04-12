import React from 'react';
import Header from '../components/pages/Header';
import Hero from '../components/pages/Hero';
import SocialMedia from '../components/pages/SocialMedia';
import Footer from '../components/pages/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <SocialMedia/>
            <Footer/>
        </div>
    );
};

export default Home;