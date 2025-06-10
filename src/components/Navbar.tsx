import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#contents' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact-info' },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          backdropFilter: trigger ? 'blur(8px)' : 'none',
          boxShadow: trigger ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src="/anehan.png" alt="Anehan Logo" style={{ height: '48px', width: 'auto' }} />
              <Typography
                variant="h5"
                component="span"
                sx={{
                  ml: 2,
                  fontWeight: 'bold',
                  color: trigger ? 'primary.main' : 'white',
                  fontFamily: 'Agrandir',
                }}
              >
                anehan
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: trigger ? 'primary.main' : 'white',
                      '&:hover': {
                        color: trigger ? 'primary.dark' : 'grey.200',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color={trigger ? 'primary' : 'inherit'}
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={isMobileMenuOpen}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      onClick={handleMenuClose}
                      component="a"
                      href={item.href}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          color: 'white',
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Get Started
                  </MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar; 