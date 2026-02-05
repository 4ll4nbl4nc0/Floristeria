import React from 'react';
import { Box, Typography, Container, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 8, backgroundColor: '#FAF9F6', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ mb: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2, color: 'primary.main' }}>
                            <LocalFloristIcon fontSize="large" sx={{ mr: 1 }} />
                            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold' }}>
                                Floristería
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
                            Creando momentos inolvidables con la belleza natural de las flores. Calidad, frescura y diseño en cada pétalo.
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 600 }}>
                            Síguenos
                        </Typography>
                        <Box>
                            <IconButton color="primary" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.05)', pt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Floristería. Todos los derechos reservados.
                    </Typography>
                    <Box sx={{ mt: { xs: 2, md: 0 } }}>
                        <Link href="#" color="text.secondary" sx={{ mx: 2, textDecoration: 'none', fontSize: '0.9rem' }}>Privacidad</Link>
                        <Link href="#" color="text.secondary" sx={{ mx: 2, textDecoration: 'none', fontSize: '0.9rem' }}>Términos</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
