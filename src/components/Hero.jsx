import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <Box
            id="hero"
            sx={{
                height: '100vh',
                width: '100%',
                backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-bcdf92dd218a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(229, 159, 178, 0.2) 100%)', // Subtle gradient overlay
                    backdropFilter: 'blur(1px)',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontFamily: 'Playfair Display',
                            fontWeight: 700,
                            fontSize: { xs: '3.5rem', md: '5.5rem' },
                            textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            letterSpacing: '-1px',
                            color: '#fff'
                        }}
                    >
                        Arreglos que Enamoran
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 5,
                            fontWeight: 300,
                            fontSize: { xs: '1.2rem', md: '1.6rem' },
                            maxWidth: '800px',
                            mx: 'auto',
                            textShadow: '0 2px 5px rgba(0,0,0,0.3)'
                        }}
                    >
                        Diseñamos emociones con la belleza de la naturaleza. Floristería exclusiva para tus momentos más especiales.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link to="catalog" smooth={true} duration={800} offset={-70}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                borderRadius: 50,
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                color: 'primary.dark',
                                fontWeight: 'bold',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Ver Catálogo
                        </Button>
                    </Link>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: 30, left: '50%', translateX: '-50%', color: 'white', opacity: 0.8 }}
            >
                <Typography variant="caption" sx={{ letterSpacing: 2, textTransform: 'uppercase' }}>Descubre Más</Typography>
            </motion.div>
        </Box>
    );
};

export default Hero;
