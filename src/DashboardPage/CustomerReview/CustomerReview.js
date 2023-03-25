import { Box, Grid } from '@mui/material';
import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ReviewForm from '../ReviewForm/ReviewForm';
import SideBar from '../SideBar/SideBar';

const CustomerReview = () => {
    return (
        <Box>
            <DashboardHeader page='Post a Review' />
            <Grid container spacing={2}>
                <SideBar />
                <ReviewForm />
            </Grid>
        </Box>
    );
};

export default CustomerReview;