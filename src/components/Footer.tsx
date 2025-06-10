import React from 'react';
import { Box, Container, Typography, useTheme, alpha } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.text.secondary,
        textAlign: 'center',
        py: 4,
        borderTop: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.2)}`,
      }}
    >
      <Container>
        <Typography
          variant='body2'
        >
          <Typography
            component="span"
            sx={{
              fontFamily: 'Agrandir',
              fontWeight: 700,
              color: 'primary.dark'
            }}
          >
            anehan
          </Typography>{' '}
          &copy; {new Date().getFullYear()} &middot; All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 