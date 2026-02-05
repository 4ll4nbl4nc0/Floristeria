import React from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        title: 'Amor Eterno',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Romance'
    },
    {
        id: 2,
        title: 'Primavera Radiante',
        price: '$35',
        image: 'https://images.unsplash.com/photo-1526047932273-341f2386314a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Cumpleaños'
    },
    {
        id: 3,
        title: 'Elegancia Blanca',
        price: '$60',
        image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Bodas'
    },
    {
        id: 4,
        title: 'Jardín Silvestre',
        price: '$50',
        image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Decoración'
    },
    {
        id: 5,
        title: 'Pasión Roja',
        price: '$55',
        image: 'https://images.unsplash.com/photo-1509623098196-0ef0ab6aa99c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Aniversario'
    },
    {
        id: 6,
        title: 'Dulce Despertar',
        price: '$40',
        image: 'https://images.unsplash.com/photo-1487070183336-b863f5f42ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'Detalles'
    },
];

const Catalog = () => {
    return (
        <Box id="catalog" sx={{ py: 15, backgroundColor: '#fff', position: 'relative' }}>
            {/* Background Decorative Element */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(229,159,178,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="overline" color="secondary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>
                            NUESTRA COLECCIÓN
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ fontFamily: 'Playfair Display', mb: 2, color: 'text.primary' }}>
                            Favoritos de la Temporada
                        </Typography>
                        <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
                    </motion.div>
                </Box>

                <div className="row g-4">
                    {products.map((product, index) => (
                        <div key={product.id} className="col-md-6 col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: 'none',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-15px)',
                                            boxShadow: '0 20px 40px rgba(229, 159, 178, 0.2)'
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={product.image}
                                            alt={product.title}
                                            sx={{
                                                transition: 'transform 0.6s ease',
                                                '&:hover': { transform: 'scale(1.1)' }
                                            }}
                                        />
                                        <Chip
                                            label={product.category}
                                            size="small"
                                            sx={{
                                                position: 'absolute',
                                                top: 15,
                                                right: 15,
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                color: 'text.primary',
                                                fontWeight: 600,
                                                backdropFilter: 'blur(5px)'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ textAlign: 'center', pt: 3 }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Playfair Display', fontWeight: 600 }}>
                                            {product.title}
                                        </Typography>
                                        <Typography variant="h6" color="primary.main" fontWeight="bold">
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ p: 3, pt: 0, justifyContent: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                borderRadius: 20,
                                                borderColor: 'divider',
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
                                                    backgroundColor: 'primary.light'
                                                }
                                            }}
                                        >
                                            Añadir al Carrito
                                        </Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        sx={{
                            px: 6,
                            py: 1.5,
                            fontSize: '1.1rem',
                            borderRadius: 50,
                            textTransform: 'uppercase',
                            letterSpacing: 1
                        }}
                    >
                        Ver Todo el Catálogo
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Catalog;
