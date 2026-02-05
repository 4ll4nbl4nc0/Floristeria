import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-scroll';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { title: 'Inicio', to: 'hero' },
        { title: 'Nosotros', to: 'about' },
        { title: 'Catálogo', to: 'catalog' },
        { title: 'Servicios', to: 'services' },
        { title: 'Contacto', to: 'contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#FAF9F6', height: '100%' }}>
            <Box sx={{ py: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main' }}>
                <LocalFloristIcon fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h5" sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold' }}>
                    Floristería
                </Typography>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <Link
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={{ width: '100%', textDecoration: 'none', color: '#5D5D5D' }}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    textAlign: 'center',
                                    py: 1.5,
                                    '& .MuiTypography-root': {
                                        fontFamily: 'Playfair Display',
                                        fontSize: '1.2rem'
                                    }
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            elevation={1}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease-in-out',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ py: 1 }}>
                    <LocalFloristIcon
                        fontSize="large"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            color: 'primary.main',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                    />
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{
                            mr: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Playfair Display',
                            fontWeight: 600,
                            color: 'text.primary',
                            textShadow: 'none',
                            flexGrow: 0,
                            cursor: 'pointer'
                        }}
                    >
                        Floristería
                    </Typography>

                    {/* Mobile Logo */}
                    <LocalFloristIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'Playfair Display',
                            fontWeight: 700,
                            color: 'text.primary',
                            flexGrow: 1
                        }}
                    >
                        Floristería
                    </Typography>


                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'primary.main' }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1, flexGrow: 1, justifyContent: 'flex-end' }}>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            mx: 0.5,
                                            px: 3,
                                            borderRadius: 20,
                                            textShadow: 'none',
                                            '&:hover': {
                                                backgroundColor: 'rgba(229, 159, 178, 0.1)'
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
