import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
    const handleClick = () => {
        // Replace with actual phone number
        const phoneNumber = '1234567890';
        const message = 'Hola! Me gustaría obtener más información sobre sus arreglos florales.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <Tooltip title="Contáctanos por WhatsApp" placement="right">
            <Fab
                color="success"
                aria-label="whatsapp"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    left: 30,
                    zIndex: 1000,
                    backgroundColor: '#25D366',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                    '&:hover': {
                        backgroundColor: '#128C7E',
                        transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease'
                }}
            >
                <WhatsAppIcon sx={{ fontSize: 32, color: 'white' }} />
            </Fab>
        </Tooltip>
    );
};

export default WhatsAppButton;
