import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Container, TextField, Typography, CircularProgress, Alert, Paper, alpha, Grid } from '@mui/material';
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
        background: (_theme) => `radial-gradient(ellipse at center, ${alpha('#ffffff', 0.5)} 0%, ${alpha('#a1c897', 0.35)} 80%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Paper sx={{ 
          p: { xs: 3, md: 5 },
          boxShadow: (theme) => `0 16px 40px ${alpha(theme.palette.grey[400], 0.1)}`,
          borderRadius: 4,
        }}>
          <Typography 
            variant="h3" 
            fontWeight={800} 
            mb={4} 
            color="#4caf50" 
            textAlign="center"
            fontFamily="Agrandir, sans-serif"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' }
            }}
          >
            Contact us
          </Typography>
          <Typography textAlign="center" sx={{ color: 'text.secondary', mb: 4, mt: -3 }}>
            Have a question or want to work together? Fill out the form below or contact us directly.
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'center' }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>Email Us</Typography>
              <Typography
                component="a"
                href="mailto:hello@anehan.com"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                mraldrinpallarcoabenoja@gmail.com
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>Our Location</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Santa Mesa, Manila, Philippines</Typography>
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
                color="primary"
                sx={{ 
                  py: 1.5,
                  fontSize: '1.1rem',
                  boxShadow: (theme) => `0 4px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                  '&:hover': {
                    boxShadow: (theme) => `0 6px 24px ${alpha(theme.palette.primary.main, 0.35)}`,
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