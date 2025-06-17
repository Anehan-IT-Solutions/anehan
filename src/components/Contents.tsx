import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import AnalyticsOutlined from '@mui/icons-material/AnalyticsOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
// import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
// import VerifiedUserOutlined from '@mui/icons-material/VerifiedUserOutlined';
// import RouteOutlined from '@mui/icons-material/RouteOutlined';
import GavelOutlined from '@mui/icons-material/GavelOutlined';
import StoreOutlined from '@mui/icons-material/StoreOutlined';
import FactoryOutlined from '@mui/icons-material/FactoryOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Section = ({ id, children, sx = {} }: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 10 },
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <        Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            backgroundColor: '#ffffff',
            borderRadius: 4,
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
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Typography
    variant="h2"
    component="h2"
    sx={{
      fontWeight: 800,
      mb: 6,
      color: '#f3a203',
      fontFamily: 'Agrandir, sans-serif',
      textAlign: 'center',
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
    {children}
  </Typography>
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const InfoCard = ({ icon, title, text }: InfoCardProps) => {
  return (
    <Grid size={{xs: 12, md: 4}}>
      <Box
        sx={{
          p: 4,
          textAlign: 'center',
          height: '100%',
          borderRadius: 4,
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 40px rgba(243, 162, 3, 0.15), 0 8px 24px rgba(0, 194, 97, 0.1)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
          }
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
            width: 80,
            height: 80,
            color: '#f3a203',
            background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)',
            borderRadius: '50%',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(243, 162, 3, 0.2) 0%, rgba(0, 194, 97, 0.2) 100%)',
              zIndex: -1,
            }
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};


const Contents: React.FC = () => {

  const keyHighlights = [
    '2000+ farmers in Central Luzon',
    '25 rice miller partners',
    '250+ rice retailers',
  ];

  // const marketTrends = [
  //   'Growing demand for quality rice',
  //   'Digital transformation in agriculture',
  //   'Focus on supply chain efficiency',
  // ];
  
  // const complianceItems = [
  //   'Agricultural and Fisheries Modernization Act',
  //   'Data Privacy Act of 2012',
  //   'Electronic Commerce Act of 2000',
  //   'Food Safety Act of 2013',
  // ];

  // const revenueStreams = ['Transaction fees', 'Premium services', 'Analytics subscriptions'];
  // const growthProjections = ['200% user growth in 2024', 'Expansion to new regions', 'New service offerings'];


  return (
    <Box id="contents" sx={{ 
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
    }}>
      <Box sx={{position: 'relative', zIndex: 1}}>

      {/* <Section id="executive-summary">
        <SectionTitle>Executive Summary</SectionTitle>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'text.secondary', fontFamily: 'Agrandir, sans-serif', maxWidth: '800px', mx: 'auto' }}>
          Anehan is a revolutionary B2B platform connecting palay farmers, rice millers, and retailers in Central Luzon. 
          Our mission is to streamline the rice supply chain, ensuring fair prices for farmers and quality products for consumers.
        </Typography>
      </Section> */}

      <Section id="company-overview">
        <SectionTitle>Company Overview</SectionTitle>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{xs: 12, md: 7}}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '1.1rem' }}>
              Founded in 2024, Anehan has quickly established itself as a key player in the agricultural technology sector. 
              Our platform serves as a digital marketplace, bringing together all stakeholders in the rice industry.
            </Typography>
          </Grid>
          <Grid size={{xs: 12, md: 5}}>
            <Box sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)', 
              borderRadius: 4, 
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
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
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Key Highlights</Typography>
              <List dense>
                {keyHighlights.map(item => (
                  <ListItem key={item} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><FiberManualRecordIcon sx={{ fontSize: 10, color: '#f3a203' }} /></ListItemIcon>
                    <ListItemText primary={item} sx={{ color: 'text.secondary' }}/>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Section>
      
      <Section id="mission-vision">
        <SectionTitle>Mission & Vision</SectionTitle>
        <Grid container spacing={4}>
          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{ 
              p: 4, 
              background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)', 
              borderRadius: 4, 
              height: '100%', 
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
              }
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Our Mission</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                To empower farmers with better market access and fair prices while ensuring quality rice reaches consumers through an efficient, transparent supply chain.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{ 
              p: 4, 
              background: 'linear-gradient(135deg, #fef3e2 0%, #f0fdf4 100%)', 
              borderRadius: 4, 
              height: '100%', 
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
              }
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f3a203', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Our Vision</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                To become the leading digital platform that transforms the rice industry in the Philippines, creating sustainable value for all stakeholders.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section id="products-services">
        <SectionTitle>Products & Services</SectionTitle>
        <Grid container spacing={4}>
          <InfoCard icon={<StorefrontOutlined sx={{ fontSize: 32, }} />} title="Digital Marketplace" text="Connect farmers directly with millers and retailers through our secure platform." />
          <InfoCard icon={<AnalyticsOutlined sx={{ fontSize: 32 }} />} title="Market Analytics" text="Access real-time market data and price trends to make informed decisions." />
          <InfoCard icon={<AccountBalanceWalletOutlined sx={{ fontSize: 32 }} />} title="Financial Services" text="Secure payment processing and financial management tools for all transactions." />
        </Grid>
      </Section>
      
      <Section id="partnerships">
        <SectionTitle>Partnerships</SectionTitle>
        <Grid container spacing={4}>
          <InfoCard icon={<FactoryOutlined sx={{ fontSize: 32 }} />} title="Rice Millers" text="Strategic partnerships with leading rice milling companies in Central Luzon." />
          <InfoCard icon={<StoreOutlined sx={{ fontSize: 32 }} />} title="Retailers" text="Strong network of rice retailers across the region." />
          <InfoCard icon={<GavelOutlined sx={{ fontSize: 32 }} />} title="Government" text="Collaboration with agricultural agencies and local government units." />
        </Grid>
      </Section>

 
      


      </Box>
    </Box>
  );
};

export default Contents; 