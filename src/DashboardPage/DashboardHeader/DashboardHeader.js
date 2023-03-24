import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { LoggedInUserContext } from '../../Contexts/Contexts';
import { LogoImg } from '../../Styles/StyledComponent';
import logo from '../../images/logos/logo.png';

const DashboardHeader = ({ page }) => {
    const [user, setUser] = useContext(LoggedInUserContext);
    return (
        <Box sx={{
            padding: '20px'
        }}>
            <Grid container spacing={2}>
                <Grid item lg={2} md={2} sm={2} xs={12}>
                    <LogoImg src={logo} />
                </Grid>
                <Grid item lg={5} md={5} sm={5} display={{xs: 'none',lg:'block',md:'block',sm:'block'}}>
                    <Typography variant='h4' component="h4" textAlign='center'>
                        {page}
                    </Typography>
                </Grid>
                <Grid item lg={5} md={5} sm={5} display={{xs: 'none',lg:'block',md:'block',sm:'block'}}>
                    <Typography variant='h4' component="h4" textAlign='center'>
                        {user.displayName}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHeader;