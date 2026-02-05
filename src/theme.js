import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E59FB2', // Soft Pastel Pink (dark enough for white text)
            light: '#FFD1DC', // Pastel Pink
            dark: '#B06E80',
            contrastText: '#fff',
        },
        secondary: {
            main: '#95B895', // Sage Green
            light: '#C1E1C1', // Pale Sage
            dark: '#698869',
            contrastText: '#fff',
        },
        background: {
            default: '#FAF9F6', // Off-white / Cream
            paper: '#FFFFFF',
        },
        text: {
            primary: '#5D5D5D', // Soft Charcoal
            secondary: '#8C8C8C',
        },
        action: {
            hover: 'rgba(229, 159, 178, 0.08)',
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            color: '#4A4A4A',
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            color: '#4A4A4A',
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        h5: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '0.5px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    padding: '10px 25px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(229, 159, 178, 0.4)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #E59FB2 30%, #FFB7C5 90%)',
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default dark mode overlay if active
                }
            }
        }
    },
});

export default theme;
