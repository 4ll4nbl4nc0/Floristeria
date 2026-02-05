import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, Typography, IconButton, TextField, Button, Avatar, Fab, Fade, Slide } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! 🌸 Bienvenida a Floristería. ¿En qué puedo ayudarte hoy?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => {
        setOpen(!open);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
        setMessages([...messages, newUserMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            let botResponseText = "Gracias por tu mensaje. Un asesor te contactará pronto.";
            const lowerInput = newUserMessage.text.toLowerCase();

            if (lowerInput.includes('hola') || lowerInput.includes('buenas')) {
                botResponseText = "¡Hola! Espero que estés teniendo un día maravilloso. 🌷";
            } else if (lowerInput.includes('precio') || lowerInput.includes('costo')) {
                botResponseText = "Nuestros arreglos inician desde los $35. Puedes ver más detalles en nuestro catálogo.";
            } else if (lowerInput.includes('ubicacion') || lowerInput.includes('donde')) {
                botResponseText = "Estamos ubicados en Av. Las Flores 123, Ciudad Jardín.";
            } else if (lowerInput.includes('horario')) {
                botResponseText = "Abrimos de Lunes a Sábado de 9:00 AM a 7:00 PM.";
            }

            setMessages(prev => [...prev, { id: prev.length + 1, text: botResponseText, sender: 'bot' }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            bottom: 100,
                            right: 20,
                            zIndex: 1000,
                            width: '350px',
                            maxWidth: '90vw'
                        }}
                    >
                        <Paper
                            elevation={6}
                            sx={{
                                height: 450,
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                overflow: 'hidden',
                                border: '1px solid rgba(229, 159, 178, 0.3)'
                            }}
                        >
                            {/* Header */}
                            <Box sx={{
                                p: 2,
                                background: 'linear-gradient(45deg, #E59FB2 30%, #FFB7C5 90%)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
                                        <SmartToyIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">Asistente Virtual</Typography>
                                        <Typography variant="caption" sx={{ opacity: 0.9 }}>En línea</Typography>
                                    </Box>
                                </Box>
                                <IconButton size="small" onClick={toggleChat} sx={{ color: 'white' }}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            {/* Messages Area */}
                            <Box sx={{
                                flexGrow: 1,
                                p: 2,
                                overflowY: 'auto',
                                backgroundColor: '#FAF9F6',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                {messages.map((msg) => (
                                    <Box
                                        key={msg.id}
                                        sx={{
                                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                            maxWidth: '80%',
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 3,
                                                borderTopRightRadius: msg.sender === 'user' ? 0 : 3,
                                                borderTopLeftRadius: msg.sender === 'bot' ? 0 : 3,
                                                backgroundColor: msg.sender === 'user' ? 'primary.main' : 'white',
                                                color: msg.sender === 'user' ? 'white' : 'text.primary',
                                                boxShadow: msg.sender === 'bot' ? '0 2px 5px rgba(0,0,0,0.05)' : '0 2px 5px rgba(229, 159, 178, 0.4)'
                                            }}
                                        >
                                            <Typography variant="body2">{msg.text}</Typography>
                                        </Paper>
                                    </Box>
                                ))}
                                <div ref={messagesEndRef} />
                            </Box>

                            {/* Input Area */}
                            <Box sx={{ p: 2, backgroundColor: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        placeholder="Escribe tu mensaje..."
                                        variant="outlined"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 3,
                                                backgroundColor: '#F8F8F8'
                                            }
                                        }}
                                    />
                                    <IconButton
                                        color="primary"
                                        onClick={handleSend}
                                        disabled={!inputValue.trim()}
                                        sx={{
                                            bgcolor: 'primary.light',
                                            color: 'primary.dark',
                                            '&:hover': { bgcolor: 'primary.main', color: 'white' }
                                        }}
                                    >
                                        <SendIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>
                    </motion.div>
                )}
            </AnimatePresence>

            <Fab
                color="primary"
                aria-label="chat"
                onClick={toggleChat}
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    width: 65,
                    height: 65,
                    boxShadow: '0 4px 20px rgba(229, 159, 178, 0.6)',
                    background: 'linear-gradient(45deg, #E59FB2 30%, #FFB7C5 90%)'
                }}
            >
                {open ? <CloseIcon fontSize="large" /> : <ChatIcon fontSize="large" />}
            </Fab>
        </>
    );
};

export default Chatbot;
