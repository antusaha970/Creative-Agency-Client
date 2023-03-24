import { Box, Grid } from '@mui/material';
import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderServices from '../OrderService/OrderServices';
import SideBar from '../SideBar/SideBar';

const DashboardOrder = () => {
    return (
        <Box>
            <DashboardHeader page='Order' />
            <Grid container spacing={2}>
                <SideBar />
                <OrderServices />
            </Grid>
        </Box>
    );
};

export default DashboardOrder;