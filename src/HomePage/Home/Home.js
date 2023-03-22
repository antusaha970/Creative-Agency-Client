import React from 'react';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <Clients />
            <Services />
            <Works />
            <Testimonial />
            <Contact />
        </>
    );
};

export default Home;