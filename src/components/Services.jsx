import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RedeemIcon from '@mui/icons-material/Redeem';
import EventIcon from '@mui/icons-material/Event';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <EventIcon sx={{ fontSize: 50 }} />,
            title: 'Bodas y Eventos',
            description: 'Transformamos tu evento en un cuento de hadas con arreglos florales personalizados. Diseño integral de espacios y centros de mesa.'
        },
        {
            icon: <RedeemIcon sx={{ fontSize: 50 }} />,
            title: 'Regalos Personalizados',
            description: 'Acompaña tus flores con chocolates artesanales, vinos selectos o peluches. Creamos el paquete perfecto para sorprender.'
        },
        {
            icon: <LocalOfferIcon sx={{ fontSize: 50 }} />,
            title: 'Suscripciones',
            description: 'La belleza de las flores frescas en tu hogar u oficina cada semana. Suscríbete y recibe alegría constante en tu puerta.'
        }
    ];

    return (
        <Box id="services" sx={{ py: 15, position: 'relative', overflow: 'hidden', backgroundColor: '#FAF9F6' }}>
            {/* Background Blob */}
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(149, 184, 149, 0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
                transform: 'translateY(-50%)'
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>
                            EXPERIENCIAS
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ fontFamily: 'Playfair Display', mb: 2, color: 'text.primary' }}>
                            Nuestros Servicios
                        </Typography>
                    </motion.div>
                </Box>

                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 6,
                                        textAlign: 'center',
                                        borderRadius: 8,
                                        height: '100%',
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.8)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.95)',
                                            boxShadow: '0 15px 35px rgba(229, 159, 178, 0.15)',
                                            '& .icon-box': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                                transform: 'scale(1.1)'
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        className="icon-box"
                                        sx={{
                                            color: 'primary.main',
                                            mb: 3,
                                            width: 100,
                                            height: 100,
                                            borderRadius: '50%',
                                            backgroundColor: 'primary.light',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            transition: 'all 0.4s ease'
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1.8rem', mb: 2 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        {service.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </Box>
    );
};

export default Services;
