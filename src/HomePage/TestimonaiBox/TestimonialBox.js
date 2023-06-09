import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import './TestimonialBox.css';

const TestimonialBox = ({ testimonial }) => {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <div className='testyBox'>
                <Stack direction="row">
                    <Avatar>
                        {testimonial.name[0]}
                    </Avatar>
                    <Box sx={{
                        paddingLeft: '10px',
                        paddingBottom: '8px'
                    }}>
                        <Typography variant="h5">{testimonial.name}</Typography>
                        <Typography variant='p'>{testimonial.company}</Typography>
                    </Box>
                </Stack>
                <Typography sx={{
                    color: '#707070',
                    paddingTop: '10px'
                }}>
                    {
                        testimonial.description
                    }
                </Typography>
            </div>
        </Grid>
    );
};

export default TestimonialBox;