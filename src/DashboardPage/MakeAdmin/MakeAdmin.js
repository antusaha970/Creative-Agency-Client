import { Box, Grid } from '@mui/material';
import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    return (
        <Box>
            <DashboardHeader page='Make Someone admin' />
            <Grid container spacing={2}>
                <SideBar />
                <MakeAdminForm />
            </Grid>
        </Box>
    );
};

export default MakeAdmin;