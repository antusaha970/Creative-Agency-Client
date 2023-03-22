import React from 'react';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <Clients />
            <Services />
            <Works />
        </>
    );
};

export default Home;