import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Service.css';
import webImg from '../../images/icons/service1.png'
import graphicImg from '../../images/icons/service2.png'
import webDevImg from '../../images/icons/service3.png'
import ServiceBox from '../ServiceBox/ServiceBox';
import client from '../../Api/Client';

const servicesData = [
    {
        title: 'Web & Mobile design',
        img: webImg,
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        title: 'Graphic design',
        img: graphicImg,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        title: 'Web development',
        img: webDevImg,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
];

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        client.get('/allServices').then(response => {
            setServices(response.data);
        });
    },[])
    console.log(services);
    return (
        <section className='service-section'>
            <Container maxWidth='lg'>
                <Typography variant='h3' component="h3" sx={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: '34px',
                    fontFamily: 'Poppins',
                    marginBottom: '20px'

                }}>
                    Provide Awesome <font color="#7AB259">Services</font>
                </Typography>


                <Grid container spacing={2}>
                    
                    {
                        servicesData.map(service => <ServiceBox service={service} key={service.name}></ServiceBox>)
                    }
                    {
                        services?.map(service => <ServiceBox service={service} key={service._id} />)
                    }
                    
                </Grid>


            </Container>
        </section>
    );
};

export default Services;