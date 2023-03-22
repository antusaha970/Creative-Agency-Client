import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <header className='headerBg'>
            <NavBar />
            <CallToAction />
        </header>
    );
};

export default Header;