import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  alpha,
  Grid,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="contact-info"
      sx={{
        py: 12,
        background: (theme) => `linear-gradient(180deg, ${alpha(theme.palette.primary.light, 0.08)} 0%, #ffffff 25%)`,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            backgroundColor: '#ffffff',
            borderColor: (theme) => alpha(theme.palette.grey[500], 0.2),
            borderRadius: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'primary.dark',
              mb: 6,
              fontFamily: 'Agrandir',
              fontWeight: 800,
            }}
          >
            Contact Information
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: '100%',
                  borderColor: alpha(theme.palette.grey[500], 0.2),
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontFamily: 'Agrandir',
                }}
              >
                <EmailIcon sx={{ fontSize: '2.5rem', mb: 1, color: 'primary.main' }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.dark',
                    mb: 1,
                    fontWeight: 700,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  component="a"
                  href="mailto:hello@anehan.com"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'primary.main'
                    },
                  }}
                >
                  hello@anehan.com
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: '100%',
                  borderColor: alpha(theme.palette.grey[500], 0.2),
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontFamily: 'Agrandir',
                }}
              >
                <LocationOnIcon sx={{ fontSize: '2.5rem', mb: 1, color: 'primary.main' }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.dark',
                    mb: 1,
                    fontWeight: 700,
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  Santa Mesa, Manila, Philippines
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactInfo; 