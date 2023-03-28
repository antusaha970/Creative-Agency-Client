import { Grid, Stack } from '@mui/material';
import React from 'react';
import OrderBox from '../OrderBox/OrderBox';

const ShowOrderContainer = ({ allOrders }) => {
    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className="bgDashboard">
                <Stack sx={{
                    padding: '30px'
                }}>
                    {
                        allOrders?.map(order => <OrderBox order={order} key={order._id} />)
                    }
                </Stack>
            </div>
        </Grid>
    );
};

export default ShowOrderContainer;