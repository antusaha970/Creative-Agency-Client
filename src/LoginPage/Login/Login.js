import { Google } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../images/logos/logo.png';
import loadingGif from '../../images/loading.gif';
import { LoginBox, LogoImg } from '../../Styles/StyledComponent';
import './Login.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';


const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    console.log(user, loading, error);

    return (

        <Container maxWidth="lg">
            <Stack justifyContent='center' alignItems="center" mt={4}>
                <Box>
                    <LogoImg src={logo} alt="logo" />
                </Box>
                <LoginBox>
                    {loading && <img src={loadingGif} alt="loading" className='loadingGif' />}
                    {!loading &&
                        <>
                            <Box>
                                <Typography variant="h3" component="h5" textAlign="center" sx={{
                                    paddingBottom: '15px'
                                }}>
                                    Login With
                                </Typography>
                            </Box>
                            <Box>
                                <Button onClick={handleLogin} variant="outlined" startIcon={<Google />} fullWidth>Continue with Google</Button>
                                <button onClick={() => signOut(auth)}>Sign out</button>
                            </Box>
                        </>
                    }
                </LoginBox>
            </Stack>
        </Container>
    );
};

export default Login;