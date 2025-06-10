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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'contents' },
    { label: 'Team', to: 'team' },
    { label: 'Contact', to: 'contact-info' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#1D2B1F',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src="/anehan-logo.png" alt="Anehan Logo" style={{ height: '48px', width: 'auto' }} />
            <Typography
              variant="h5"
              component="span"
              sx={{
                ml: 2,
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'Agrandir',
              }}
            >
              Anehan
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'grey.300',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                sx={{ color: 'white' }}
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
                    backgroundColor: 'rgba(29, 43, 31, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 