import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const prototypes = [
  '/prototype/1.jpg',
  '/prototype/2.jpg',
  '/prototype/3.jpg',
  '/prototype/4.jpg',
  '/prototype/5.jpg',
  '/prototype/6.jpg',
];

const PhoneFrame = ({ src }: { src: string }) => (
  <Box sx={{ px: 2, py: 2 }}>
    <Paper
      elevation={8}
      sx={{
        position: 'relative',
        width: '280px',
        height: '600px',
        borderRadius: '36px',
        border: '10px solid #111',
        backgroundColor: '#111',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        mx: 'auto'
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '8px',
          backgroundColor: '#111',
          borderRadius: '4px',
          zIndex: 2,
        }}
      />
      <Box
        component="img"
        src={src}
        alt="App prototype"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '26px',
        }}
      />
    </Paper>
  </Box>
);

const Prototype: React.FC = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    '.slick-dots li button:before': {
      fontSize: '12px',
      color: theme.palette.primary.main,
    },
    '.slick-dots li.slick-active button:before': {
      color: theme.palette.primary.dark,
    }
  };

  return (
    <Box 
      id="prototype" 
      sx={{ 
        py: 12,
        backgroundColor: (theme) => theme.palette.grey[100],
        position: 'relative',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle, ${theme.palette.primary.light}10 0%, transparent 60%)`,
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::before': {
          width: 300,
          height: 300,
          top: -50,
          left: -100,
        },
        '&::after': {
          width: 400,
          height: 400,
          bottom: -100,
          right: -100,
        }
      }}
    >
      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontWeight: 800,
            mb: 8,
            color: 'primary.dark',
            fontFamily: 'Agrandir, sans-serif',
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3rem' },
          }}
        >
          App Prototype
        </Typography>
        <Slider {...settings}>
          {prototypes.map((src, index) => (
            <PhoneFrame key={index} src={src} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Prototype; 