import { Container, Typography } from '@mui/material';
import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Works.css';

const Works = () => {
    return (
        <section className='work'>
            <Container maxWidth="lg">
            <Typography variant='h3' component="h3" sx={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: '34px',
                    fontFamily: 'Poppins',
                    marginBottom: '20px',
                    color: '#fff'
                }}>
                    Here are some of <font color="#7AB259">our works</font>
                </Typography>
                <Carousel />
            </Container>
        </section>
    );
};

export default Works;