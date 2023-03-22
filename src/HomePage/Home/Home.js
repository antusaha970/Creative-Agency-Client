import React from 'react';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header />
            <Clients />
            <Services />
        </>
    );
};

export default Home;