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
  useTheme,
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
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            backgroundColor: '#ffffff',
            borderColor: (theme) => theme.palette.grey[300],
            borderRadius: 3,
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
      color: 'primary.dark',
      fontFamily: 'Agrandir, sans-serif',
      textAlign: 'center',
      fontSize: { xs: '2.5rem', md: '3rem' },
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
  const theme = useTheme();
  return (
    <Grid size={{xs: 12, md: 4}}>
      <Box
        sx={{
          p: 4,
          textAlign: 'center',
          height: '100%',
          borderRadius: 3,
          backgroundColor: 'white',
          border: (theme) => `1px solid ${theme.palette.grey[300]}`,
          borderTop: '4px solid transparent',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'transparent',
            borderTopColor: theme.palette.primary.main,
            boxShadow: '0 8px 20px rgba(21, 128, 61, 0.08)',
          },
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
            color: theme.palette.primary.main,
            backgroundColor: '#dcfce7',
            borderRadius: '50%',
            p: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark', mb: 1, fontFamily: 'Agrandir, sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};


const Contents: React.FC = () => {
  const theme = useTheme();

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
            <Box sx={{ p: 3, backgroundColor: '#e6f5ea', borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Key Highlights</Typography>
              <List dense>
                {keyHighlights.map(item => (
                  <ListItem key={item} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><FiberManualRecordIcon sx={{ fontSize: 10, color: theme.palette.primary.main }} /></ListItemIcon>
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
            <Box sx={{ p: 4, backgroundColor: '#e6f5ea', borderRadius: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.dark', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Our Mission</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                To empower farmers with better market access and fair prices while ensuring quality rice reaches consumers through an efficient, transparent supply chain.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{ p: 4, backgroundColor: '#e6f5ea', borderRadius: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.dark', mb: 2, fontFamily: 'Agrandir, sans-serif' }}>Our Vision</Typography>
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
          <InfoCard icon={<StorefrontOutlined sx={{ fontSize: 32 }} />} title="Digital Marketplace" text="Connect farmers directly with millers and retailers through our secure platform." />
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