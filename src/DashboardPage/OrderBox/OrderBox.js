import { Avatar, Box, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import './OrderBox.css';
import icon from '../../images/icons/service1.png';

const OrderBox = ({ order }) => {
    return (
        <div className='orderBox'>
            <Box>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt={`service`}
                                src={icon}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={order.status} />
                    </ListItemButton>
                </ListItem>
                <Box sx={{
                    padding: '15px'
                }}>
                    <Typography variant="h5" component="h4" >
                        {
                            order.service
                        }
                    </Typography>
                    <Typography variant="p" component="p" sx={{
                        color: 'rgba(0, 0, 0, 0.7)'
                    }}>
                        {
                            order.projectDetails
                        }
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default OrderBox;