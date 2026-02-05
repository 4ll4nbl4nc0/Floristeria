import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </Box>
  );
}

export default App;
