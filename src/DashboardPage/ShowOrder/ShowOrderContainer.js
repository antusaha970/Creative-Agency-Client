import { Grid, Stack } from '@mui/material';
import React from 'react';
import OrderBox from '../OrderBox/OrderBox';

const ShowOrderContainer = ({ allOrders }) => {
    return (
        <div className='bgDashboard'>
            <Grid item lg={10} md={10} sm={10} xs={12} sx={{
                padding: '30px'
            }}>
                <Stack>
                    {
                        allOrders?.map(order => <OrderBox order={order} key={order._id} />)
                    }
                </Stack>
            </Grid>
        </div>
    );
};

export default ShowOrderContainer;