import { ContentCut } from '@mui/icons-material';
import { Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Stack, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Link } from 'react-router-dom';
import './SideBar.css';
const SideBar = () => {
    return (
        <Grid item lg={2} md={2} sm={2} xs={12}>
            <MenuList>
                <Link to='/dashboard/order'>
                    <MenuItem>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Order</ListItemText>
                    </MenuItem>
                </Link>

                <Link to='/dashboard/serviceList'>
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Service List</ListItemText>
                    </MenuItem>
                </Link>

                <Link to='/dashboard/review'>
                    <MenuItem>
                        <ListItemIcon>
                            <RateReviewOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Review</ListItemText>
                    </MenuItem>
                </Link>

                <Link to='/dashboard/makeAdmin'>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAddOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Make Admin</ListItemText>
                    </MenuItem>
                </Link>

            </MenuList>
        </Grid>
    );
};

export default SideBar;