import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';
import TestimonialBox from '../TestimonaiBox/TestimonialBox';
import client from '../../Api/Client';

const testiMonialdata = [
    {
        name: 'Nash Patrik',
        companyName: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1,
    },
    {
        name: 'Jitu Banik',
        companyName: 'CEO, Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer2,
    },
    {
        name: 'Nahid Mirza',
        companyName: 'CEO, Mirza, LLC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer3,
    },
];

const Testimonial = () => {
    const [customerReviews,setCustomerReviews] = useState([]);

    useEffect(()=>{
        client.get('/allCustomerReview').then(response => {
            setCustomerReviews(response.data);
        })
    },[])

    return (
        <section className='testimonial'>
            <Container maxWidth="lg">
                <Typography variant='h3' component="h3" sx={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: '34px',
                    fontFamily: 'Poppins',
                    marginBottom: '20px',
                    color: '#000'
                }}>
                    Clients<font color="#7AB259"> Feedback</font>
                </Typography>


                <Grid container spacing={2}>
                    {
                        customerReviews?.map(testimonial => <TestimonialBox testimonial={testimonial} key={testimonial.name}></TestimonialBox>)
                    }
                </Grid>


            </Container>
        </section>
    );
};

export default Testimonial;