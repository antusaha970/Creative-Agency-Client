import { Box, Grid } from '@mui/material';
import React from 'react';
import { ServiceTitle, ServiceTitle2 } from '../../Styles/StyledComponent';
import './ServiceBox.css';
import icon from '../../images/icons/service4.png';

const ServiceBox = ({service}) => {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box sx={{
                padding: '15px',
            }}>
                <img src={service.img ? service.img : icon } alt={service.title} className="service-img" />
                <ServiceTitle variant="h5" component="h5">
                    {service.title}
                </ServiceTitle>
                <ServiceTitle2 variant='p' component="p">
                    {service.description}
                </ServiceTitle2>
            </Box>
        </Grid>
    );
};

export default ServiceBox;