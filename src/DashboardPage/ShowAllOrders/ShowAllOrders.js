// This component shows all customer orders in admin dashboard all orders menu
import { Box, Grid } from '@mui/material';
import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ShowAllOrdersTable from '../ShowAllOrdersTable/ShowAllOrdersTable';
import SideBar from '../SideBar/SideBar';

const ShowAllOrders = () => {
    return (
        <Box>
            <DashboardHeader page='All Customer orders' />
            <Grid container spacing={2}>
                <SideBar />
                <ShowAllOrdersTable />
            </Grid>
        </Box>
    );
};

export default ShowAllOrders;