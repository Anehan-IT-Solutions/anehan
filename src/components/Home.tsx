import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D1117',
        color: 'white',
        overflow: 'hidden',
        textAlign: 'center',
        pt: 8,
        pb: 8,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          '& > *': {
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(80px)',
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            background: alpha(theme.palette.secondary.main, 0.2),
            top: '-10%',
            left: '-20%',
            animation: 'glow-1 25s infinite',
            '@keyframes glow-1': {
              '0%': { transform: 'translate(0, 0) scale(1)' },
              '50%': { transform: 'translate(60px, 80px) scale(1.2)' },
              '100%': { transform: 'translate(0, 0) scale(1)' },
            },
          }}
        />
        <Box
          sx={{
            width: { xs: 300, md: 400 },
            height: { xs: 300, md: 400 },
            background: alpha(theme.palette.primary.main, 0.15),
            bottom: '-20%',
            right: '-15%',
            animation: 'glow-2 20s infinite',
            '@keyframes glow-2': {
              '0%': { transform: 'translate(0, 0) scale(1.2)' },
              '50%': { transform: 'translate(-50px, -70px) scale(1)' },
              '100%': { transform: 'translate(0, 0) scale(1.2)' },
            },
          }}
        />
      </Box>

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
            textTransform: 'uppercase',
            color: 'white',
            textShadow: `0 0 15px ${alpha(theme.palette.secondary.main, 0.5)}, 0 0 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
            animation: 'fadeInDown 1s ease-out',
            '@keyframes fadeInDown': {
              'from': { opacity: 0, transform: 'translateY(-20px)' },
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
            color: theme.palette.secondary.light,
            animation: 'fadeInUp 1s ease-out 0.2s both',
            '@keyframes fadeInUp': {
              'from': { opacity: 0, transform: 'translateY(20px)' },
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
            color: alpha(theme.palette.common.white, 0.7),
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.8,
            animation: 'fadeInUp 1s ease-out 0.4s both',
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
            animation: 'fadeInUp 1s ease-out 0.6s both',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: `0 0 20px ${alpha(theme.palette.secondary.main, 0.4)}`,
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: `0 0 30px ${alpha(theme.palette.secondary.main, 0.6)}`,
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderWidth: '2px !important',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: alpha(theme.palette.common.white, 0.8),
              borderColor: alpha(theme.palette.common.white, 0.5),
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.1),
                borderColor: 'white',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          zIndex: 2,
          color: alpha(theme.palette.common.white, 0.5),
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