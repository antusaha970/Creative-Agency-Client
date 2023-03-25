import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import client from '../../Api/Client';
import { LoggedInUserContext } from '../../Contexts/Contexts';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ShowOrderContainer from '../ShowOrder/ShowOrderContainer';
import SideBar from '../SideBar/SideBar';

const ServiceList = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [user, setUser] = useContext(LoggedInUserContext);
    useEffect(() => {
        client.get(`/orderList?email=${user.email}`)
            .then(response => {
                console.log(response.data);
                setAllOrders(response.data);
            })
    }, [])

    return (
        <Box>
            <DashboardHeader page='Your orders status' />
            <Grid container spacing={2}>
                <SideBar />
                <ShowOrderContainer allOrders={allOrders} />
            </Grid>
        </Box>
    );
};

export default ServiceList;