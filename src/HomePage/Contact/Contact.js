import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContactForm = (data) => {
        console.log(data);
    }

    return (
        <section className='contact'>
            <Container maxWidth="lg">
                <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}>
                    <Box flex={1} sx={{
                        marginBottom: '20px'
                    }}>
                        <Typography variant="h4" component="h2" sx={{
                            fontWeight: '600',
                            paddingBottom: '10px'
                        }}>
                            Let us handle your project, professionally.
                        </Typography>
                        <Typography variant="p" component="p" >
                            With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                        </Typography>
                    </Box>
                    <Box flex={2}>
                        <form action="" onSubmit={handleSubmit(handleContactForm)}>
                            {errors.email && <span>This field is required</span>}
                            <input placeholder='Enter Your Email' type="email" name="email"  {...register("email", { required: true })} className="contact-inputs" />
                            {errors.name && <span>This field is required</span>}
                            <input placeholder='Enter Your Name' type="text" name="name"  {...register("name", { required: true })}  className="contact-inputs" />
                            {errors.message && <span>This field is required</span>}
                            <textarea type="text"  placeholder='Enter Your Message' name="message"  {...register("message", { required: true })} className="contact-inputs" />
                            <Button variant="contained" type='submit'>Send</Button>
                        </form>
                    </Box>
                </Stack>
            </Container>
        </section>
    );
};

export default Contact;