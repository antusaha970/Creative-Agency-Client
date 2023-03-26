import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import client from '../../Api/Client';
import { AdminContext, LoggedInUserContext } from '../../Contexts/Contexts';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderServices from '../OrderService/OrderServices';
import SideBar from '../SideBar/SideBar';

const DashboardOrder = () => {
    const [user,setUser] = useContext(LoggedInUserContext);
    const [isAdmin,setIsAdmin] = useContext(AdminContext);
    const email = user.email;
    useEffect(()=>{
        client.get(`/checkAdmin?email=${email}`).then(response =>{
            setIsAdmin(response.data);
        })
    },[])
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