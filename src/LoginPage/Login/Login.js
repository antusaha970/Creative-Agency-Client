import { Google } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import logo from '../../images/logos/logo.png';
import { LoginBox, LogoImg } from '../../Styles/StyledComponent';
import './Login.css';


const Login = () => {
    return (
        <Container maxWidth="lg">
            <Stack justifyContent='center' alignItems="center" mt={4}>
                <Box>
                    <LogoImg src={logo} alt="logo" />
                </Box>
                <LoginBox>
                    <Box>
                        <Typography variant="h3" component="h5" textAlign="center" sx={{
                            paddingBottom: '15px'
                        }}>
                            Login With
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" startIcon={<Google />} fullWidth>Continue with Google</Button>
                    </Box>
                </LoginBox>
            </Stack>
        </Container>
    );
};

export default Login;