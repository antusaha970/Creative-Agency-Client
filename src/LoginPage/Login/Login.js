import { Google } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import logo from '../../images/logos/logo.png';
import { LoginBox, LogoImg } from '../../Styles/StyledComponent';
import './Login.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../Firebase/Firebase.config';
import { GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult } from "firebase/auth";
import { LoggedInUserContext } from '../../Contexts/Contexts';
import { useNavigate } from 'react-router-dom';


const app = initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    const auth = getAuth();
    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const navigate = useNavigate();

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    const signedInUser = result.user;
                    setUser(signedInUser);
                    navigate('/dashboard/order');
                }
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });

    }, []);

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
                        <Button onClick={handleLogin} variant="outlined" startIcon={<Google />} fullWidth>Continue with Google</Button>
                    </Box>
                </LoginBox>
            </Stack>
            <Typography component='p' variant='h6' sx={{
                textAlign: 'center'
            }}>Please wait a moment after redirecting</Typography>
        </Container>
    );
};

export default Login;