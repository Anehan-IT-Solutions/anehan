import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll';

const Home: React.FC = () => {

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1D1D1D',
        overflow: 'hidden',
        textAlign: 'center',
        pt: 8,
        pb: 8,
        background: 'linear-gradient(to bottom, rgba(0, 194, 97, 0.6), rgba(1, 107, 47, 0.6)), url(\'/anehan-bg.png\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAABNJREFUGFdjZGRiYmD4////ZQAAPGoBCv6626gAAAAASUVORK5CYII=')`,
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
            fontWeight: 800,
            mb: 2,
            fontFamily: 'Agrandir, sans-serif',
            letterSpacing: '0.05em',
            // textTransform: 'uppercase',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            animation: 'fadeInDown 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            '@keyframes fadeInDown': {
              'from': { opacity: 0, transform: 'translateY(-30px)' },
              'to': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          anehan
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            fontWeight: 400,
            mb: 4,
            fontFamily: 'Agrandir, sans-serif',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            animation: 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both',
            '@keyframes fadeInUp': {
              'from': { opacity: 0, transform: 'translateY(30px)' },
              'to': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          Sell your harvest at a better price.<br />
          Buy affordable, high quality rice.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            mt: 4,
            mb: 6,
            fontFamily: 'Agrandir, sans-serif',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.8,
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            animation: 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both',
          }}
        >
          Anehan is a B2B mobile platform that connects palay farmers with rice milling companies, and millers with rice retailers. Our goal is to help 2000 farmers in Central Luzon to sell their produce at higher price, and directly link 250 rice retailers to our 25 rice miller partners by 2025.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            mt: 4,
            animation: 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both',
          }}
        >
          <Button
            component={Link}
            to="contents"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 'bold',
              backgroundColor: '#f3a203',
              color: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#ff9e00',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 15px rgba(243, 162, 3, 0.4)',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      <Box
        component={Link}
        to="contents"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          zIndex: 2,
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          animation: 'float 2.5s infinite ease-in-out',
          '@keyframes float': {
            '0%': { transform: 'translate(-50%, 0px)' },
            '50%': { transform: 'translate(-50%, -10px)' },
            '100%': { transform: 'translate(-50%, 0px)' },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: '2.5rem' }} />
      </Box>
    </Box>
  );
};

export default Home; 