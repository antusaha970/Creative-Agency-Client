// This component is for show the table data in all orders menu
import { Box, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import client from '../../Api/Client';
import { CustomTableCell } from '../../Styles/StyledComponent';

const ShowAllOrdersTable = () => {
    const [allOrdersData, setAllOrdersData] = useState([]);
    useEffect(() => {
        client.get('/showAllOrders').then(response => {
            setAllOrdersData(response.data);
        })
    }, []);

    const handleStatusChange = (id) =>{
        console.log(id);
        client.patch('/updateStatus',{id}).then(response => {
            console.log(response.data);
        })
    }

    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className='bgDashboard'>
                <Box sx={{
                    padding: '15px',
                    overflowX: 'auto'
                }}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Name</CustomTableCell>
                                    <CustomTableCell align="right">Email ID</CustomTableCell>
                                    <CustomTableCell align="right">Service</CustomTableCell>
                                    <CustomTableCell align="right">Project Details</CustomTableCell>
                                    <CustomTableCell align="right">Status</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allOrdersData?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <CustomTableCell component="th" scope="row">
                                            {row.name}
                                        </CustomTableCell>
                                        <CustomTableCell align="right">{row.email}</CustomTableCell>
                                        <CustomTableCell align="right">{row.service}</CustomTableCell>
                                        <CustomTableCell align="right">{row.projectDetails}</CustomTableCell>
                                        <CustomTableCell align="right">
                                            <select name="status" onChange={()=>handleStatusChange(row._id)}>
                                                <option value={row.status}>{row.status}</option>
                                                <option value="done">Done</option>
                                            </select>
                                        </CustomTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </Grid>
    );
};

export default ShowAllOrdersTable;