import { Box, Container, Stack} from '@mui/material';
import React from 'react';
import airbnb from '../../images/logos/airbnb.png';
import google from '../../images/logos/google.png';
import netflix from '../../images/logos/netflix.png';
import slack from '../../images/logos/slack.png';
import uber from '../../images/logos/uber.png';
import './Clients.css';

const Clients = () => {
    return (
        <section className='clients-section'> 
            <Container maxWidth="lg">
                <Stack direction={{lg:'row',md:'row',sm:'column',xs:'column'}} justifyContent="center" alignItems="center">
                    <Box flex={1} sx={{
                        margin: '10px'
                    }}>
                        <img src={airbnb} alt="brand" className='brandImg' />
                    </Box>
                    <Box flex={1} sx={{
                        margin: '10px'
                    }}>
                        <img src={google} alt="brand" className='brandImg' />
                    </Box>
                    <Box flex={1} sx={{
                        margin: '10px'
                    }}>
                        <img src={netflix} alt="brand" className='brandImg' />
                    </Box>
                    <Box flex={1} sx={{
                        margin: '10px'
                    }}>
                        <img src={slack} alt="brand" className='brandImg' />
                    </Box>
                    <Box flex={1} sx={{
                        margin: '10px'
                    }}>
                        <img src={uber} alt="brand" className='brandImg' />
                    </Box>
                </Stack>
            </Container>
        </section>
    );
};

export default Clients;