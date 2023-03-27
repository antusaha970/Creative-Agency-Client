// This component is for add a service  
import { Box, Grid } from '@mui/material';
import React from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    return (
        <Box>
            <DashboardHeader page='Add a service' />
            <Grid container spacing={2}>
                <SideBar />
                <AddServiceForm />
            </Grid>
        </Box>
    );
};

export default AddService;