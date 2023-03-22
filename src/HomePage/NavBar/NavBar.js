
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, IconButton, Menu, Stack, Tooltip } from '@mui/material';
import { LogoImg, MenuLink, MenuStack, ResponsiveLink } from '../../Styles/StyledComponent';
import logo from '../../images/logos/logo.png';
import { MenuOpen } from '@mui/icons-material';
import './NavBar.css';

const NavArea = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth='lg'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'sx={{
                paddingTop: '5px'
            }}>
                <LogoImg src={logo} alt="Logo" />
                <Box display={{ md: 'block', lg: 'block', xs: 'none', sm: 'none' }}>
                    <MenuStack direction='row' spacing={2} className='menu'>
                        <MenuLink variant="p" component="p" >
                            <Link to='/'>Home</Link>
                        </MenuLink>
                        <MenuLink variant="p" component="p">
                            <Link to='/'>Our Portfolio</Link>
                        </MenuLink>
                        <MenuLink variant="p" component="p">
                            <Link to='/'>Our Team</Link>
                        </MenuLink>
                        <MenuLink variant="p" component="p">
                            <Link to='/'>Contact Us</Link>
                        </MenuLink>
                        <Link to="/">
                            <Button variant="contained" color="primary">Login</Button>
                        </Link>
                    </MenuStack>
                </Box>
                <Box display={{ md: 'none', lg: 'none', xs: 'block', sm: 'block' }}>
                    <Tooltip title="Open Menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuOpen />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        className='menu'
                    >
                        <ResponsiveLink variant="p" component="p">
                            <Link to='/'>Home</Link>
                        </ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">
                            <Link to='/'>Our Portfolio</Link>
                        </ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">
                            <Link to='/'>Our Team</Link>
                        </ResponsiveLink>
                        <Link to="/">
                            <Button variant="contained" color="primary" sx={{
                                marginLeft: '5px'
                            }}>Login</Button>
                        </Link>
                    </Menu>
                </Box>

            </Stack>
        </Container>
    );
};

export default NavArea;