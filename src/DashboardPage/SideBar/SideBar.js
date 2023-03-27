import { ContentCut } from '@mui/icons-material';
import { Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { AdminContext } from '../../Contexts/Contexts';
const SideBar = () => {

    const [isAdmin,setIsAdmin] = useContext(AdminContext);

    return (
        <Grid item lg={2} md={2} sm={2} xs={12}>
            <MenuList>

                {!isAdmin && <Link to='/dashboard/order'>
                    <MenuItem>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Order</ListItemText>
                    </MenuItem>
                </Link>}

                {!isAdmin && <Link to='/dashboard/serviceList'>
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Service List</ListItemText>
                    </MenuItem>
                </Link>}

               {!isAdmin && <Link to='/dashboard/review'>
                    <MenuItem>
                        <ListItemIcon>
                            <RateReviewOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Review</ListItemText>
                    </MenuItem>
                </Link>}

                {isAdmin && <Link to='/dashboard/makeAdmin'>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAddOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Make Admin</ListItemText>
                    </MenuItem>
                </Link>}

               {isAdmin && <Link to='/dashboard/allOrders'>
                    <MenuItem>
                        <ListItemIcon>
                            <NextWeekIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>All Orders</ListItemText>
                    </MenuItem>
                </Link>}

            {isAdmin && <Link to='/dashboard/addService'>
                <MenuItem>
                    <ListItemIcon>
                        <AddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add a service</ListItemText>
                </MenuItem>
            </Link>}

            </MenuList>
        </Grid>
    );
};

export default SideBar;