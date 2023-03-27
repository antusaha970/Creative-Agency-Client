// This component is for show the table data in all orders menu
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import client from '../../Api/Client';

const ShowAllOrdersTable = () => {
    const [allOrdersData,setAllOrdersData] = useState([]);
    useEffect(()=>{
        client.get('/showAllOrders').then(response =>{
            console.log(response.data);
            setAllOrdersData(response.data);
        })
    },[])
    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className='bgDashboard'>

            </div>
        </Grid>
    );
};

export default ShowAllOrdersTable;