import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import './CTA.css';
import frame from '../../images/logos/Frame.png';
import { Title } from '../../Styles/StyledComponent';

const CallToAction = () => {
    return (
        <main className='cTa'>
            <Container maxWidth="lg">
                <Stack direction={{ lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' }} justifyContent="center" alignItems="center">
                    <Box flex={1}>
                        <Title component="h1" variant='h1'>
                            Let’s Grow Your
                            Brand To The
                            Next Level
                        </Title>
                        <Typography component="p" sx={{
                            margin: '10px 0'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </Typography>
                        <Button variant='contained' >Hire Us</Button>
                    </Box>
                    <Box flex={1.5}>
                        <img src={frame}  alt="illustration" className='img' />
                    </Box>
                </Stack>
            </Container>
        </main>
    );
};

export default CallToAction;