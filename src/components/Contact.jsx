import React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Box id="contact" sx={{ py: 15, backgroundColor: '#fff' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" color="secondary" sx={{ letterSpacing: 3, fontWeight: 'bold' }}>
                        ESTAMOS AQUÍ PARA TI
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ fontFamily: 'Playfair Display', color: 'text.primary' }}>
                        Contáctanos
                    </Typography>
                </Box>

                <div className="row g-5">
                    <div className="col-lg-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ height: '100%' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    borderRadius: 6,
                                    background: 'linear-gradient(135deg, #E59FB2 0%, #FFB7C5 100%)',
                                    color: 'white',
                                    boxShadow: '0 20px 40px rgba(229, 159, 178, 0.3)'
                                }}
                            >
                                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display', mb: 4, fontWeight: 600 }}>
                                    Información de Contacto
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                        <LocationOnIcon sx={{ fontSize: 24 }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Dirección</Typography>
                                        <Typography variant="body1" fontWeight="500">Av. Las Flores 123, Ciudad Jardín</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                        <PhoneIcon sx={{ fontSize: 24 }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Teléfono</Typography>
                                        <Typography variant="body1" fontWeight="500">+123 456 7890</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                        <EmailIcon sx={{ fontSize: 24 }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Email</Typography>
                                        <Typography variant="body1" fontWeight="500">hola@floristeria.com</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 4, height: 300, borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.532398573629!2d-99.1724646850945!3d19.432607786884615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d810d20da6e8cf!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses!2smx!4v1689626384594!5m2!1ses!2smx"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación Floristería"
                                    ></iframe>
                                </Box>
                            </Paper>
                        </motion.div>
                    </div>

                    <div className="col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Paper elevation={0} sx={{ p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#FAF9F6' }}>
                                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display', mb: 2 }}>
                                    Envíanos un Mensaje
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                                    ¿Tienes alguna duda, pedido especial o quieres agendar una cita? Déjanos tus datos.
                                </Typography>

                                <form noValidate autoComplete="off">
                                    <div className="row g-3">
                                        <div className="col-md-6 mb-3">
                                            <TextField fullWidth label="Nombre" variant="outlined"
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <TextField fullWidth label="Apellido" variant="outlined"
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }}
                                            />
                                        </div>
                                    </div>
                                    <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />
                                    <TextField fullWidth label="Teléfono" variant="outlined" sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />
                                    <TextField fullWidth label="Mensaje" multiline rows={5} variant="outlined" sx={{ mb: 4, '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{ px: 5, py: 1.5, fontSize: '1.1rem', borderRadius: 50, boxShadow: 'none' }}
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </form>
                            </Paper>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default Contact;
