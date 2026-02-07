import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { IMAGES } from '../utils/images';

const About = () => {
    return (
        <Box id="about" sx={{ py: 15, backgroundColor: 'background.default', overflow: 'hidden' }}>
            <Container maxWidth="xl">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 order-lg-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -20,
                                        right: -20,
                                        width: '100%',
                                        height: '100%',
                                        border: '2px solid #E59FB2', // Pastel pink border
                                        borderRadius: '30px 0 30px 0',
                                        zIndex: 0,
                                        display: { xs: 'none', md: 'block' }
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={IMAGES.ABOUT.FLORIST}
                                    alt="Florist working"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '30px 0 30px 0',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 'bold', fontSize: '0.9rem' }}>
                                NUESTRA HISTORIA
                            </Typography>
                            <Typography variant="h2" component="h2" gutterBottom sx={{ fontFamily: 'Playfair Display', mb: 3, color: 'text.primary' }}>
                                Pasión por los <span style={{ color: '#E59FB2', fontStyle: 'italic' }}>Detalles</span>
                            </Typography>
                            <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                                En Floristería, creemos que cada flor cuenta una historia. Desde hace más de una década, nos hemos dedicado a cultivar sonrisas a través del arte floral, seleccionando meticulosamente cada tallo para garantizar frescura y belleza inigualables.
                            </Typography>
                            <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                                Nuestro equipo de artesanos florales combina técnicas tradicionales con tendencias modernas para crear arreglos que no solo decoran espacios, sino que tocan corazones. Ya sea una boda íntima o un gran evento corporativo, ponemos nuestra alma en cada creación.
                            </Typography>

                            <Button variant="outlined" color="primary" size="large" sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
                                Conócenos Más
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default About;
