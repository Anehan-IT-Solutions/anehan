import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Container, TextField, Typography, CircularProgress, Alert, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SendIcon from '@mui/icons-material/Send';

const SERVICE_ID = 'service_ukh7x59';
const TEMPLATE_ID = 'template_h61vzja';
const USER_ID = 'taHa1a5zIOU7I1fYv';

const initialForm = { name: '', email: '', subject: '', message: '' };

const validateField = (name: string, value: string) => {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
    case 'email':
      return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
    case 'subject':
      return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
    default:
      return '';
  }
};

const ContactInfo: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (hasSubmitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    const newErrors: { [key: string]: string } = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key as keyof typeof form]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setStatus('loading');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: 'Anehan',
          from_name: form.name,
          message: form.message,
          reply_to: form.email,
          subject: form.subject,
        },
        USER_ID
      );
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <Box 
      id="contact-info" 
      sx={{ 
        py: 12,
        backgroundColor: (theme) => theme.palette.grey[100],
        position: 'relative',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243, 162, 3, 0.1) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::before': {
          width: 400,
          height: 400,
          top: -100,
          left: -100,
        },
        '&::after': {
          width: 300,
          height: 300,
          bottom: -50,
          right: -50,
          background: 'radial-gradient(circle, rgba(0, 194, 97, 0.1) 0%, transparent 60%)',
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
            }
          }}>
          <Typography 
            variant="h2" 
            fontWeight={800} 
            mb={4} 
            color="#f3a203" 
            textAlign="center"
            fontFamily="Agrandir, sans-serif"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
                borderRadius: 2,
              }
            }}
          >
            Contact us
          </Typography>
          <Typography textAlign="center" sx={{ color: '#00c261', mb: 4, mt: 0, fontFamily: 'Agrandir, sans-serif' }}>
            Have a question or want to work together? Fill out the form below or contact us directly.
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'center' }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ 
                p: 3, 
                background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)', 
                borderRadius: 3,
                border: '2px solid transparent',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  padding: '2px',
                  background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
                  borderRadius: 'inherit',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                }
              }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 1, fontFamily: 'Agrandir, sans-serif' }}>📧 Email Us</Typography>
                <Typography
                  component="a"
                  href="mailto:hello@anehan.com"
                  sx={{
                    color: '#00c261',
                    textDecoration: 'none',
                    fontWeight: 600,
                    wordBreak: 'break-all',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.4,
                    display: 'block',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  mraldrinpallarcoabenoja@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ 
                p: 3, 
                background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)', 
                borderRadius: 3,
                border: '2px solid transparent',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  padding: '2px',
                  background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
                  borderRadius: 'inherit',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                }
              }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 1, fontFamily: 'Agrandir, sans-serif' }}>📍 Our Location</Typography>
                <Typography sx={{ color: '#00c261', fontWeight: 600 }}>Santa Mesa, Manila, Philippines</Typography>
              </Box>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              margin="normal"
              variant="outlined"
              multiline
              minRows={5}
            />
            <Box mt={4}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{ 
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
                  borderRadius: 3,
                  fontWeight: 'bold',
                  fontFamily: 'Agrandir, sans-serif',
                  boxShadow: '0 4px 12px rgba(243, 162, 3, 0.3), 0 4px 12px rgba(0, 194, 97, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(243, 162, 3, 0.4), 0 8px 24px rgba(0, 194, 97, 0.3)',
                  },
                  '&:disabled': {
                    background: 'linear-gradient(135deg, rgba(243, 162, 3, 0.5) 0%, rgba(0, 194, 97, 0.5) 100%)',
                  }
                }}
                disabled={status === 'loading'}
                startIcon={status === 'loading' ? <CircularProgress size={22} color="inherit" /> : <SendIcon />}
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Error Sending'
                  : 'Send Message'}
              </Button>
            </Box>
            {status === 'success' && (
              <Alert 
                icon={<CheckCircleIcon />} 
                severity="success" 
                sx={{ mt: 3 }}
              >
                Message sent successfully!
              </Alert>
            )}
            {status === 'error' && (
              <Alert 
                icon={<ErrorIcon />} 
                severity="error" 
                sx={{ mt: 3 }}
              >
                Error sending message. Please try again.
              </Alert>
            )}
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactInfo; 