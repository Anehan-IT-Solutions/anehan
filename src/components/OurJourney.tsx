import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  EmojiEvents as TrophyIcon,
  Lightbulb as LightbulbIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Cloud as CloudIcon,
} from '@mui/icons-material';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const journeyData: JourneyItem[] = [
  {
    year: '2023',
    title: 'Project Inception',
    description: 'Started as a capstone project during the undergrad journey of the core founders, initially named "AgriCTRL+".',
    icon: <LightbulbIcon sx={{ fontSize: 24 }} />
  },
  {
    year: '2024',
    title: 'Hackathon Achievement',
    description: 'Won as 2nd Placer in hackathon by ICP Hub PH, validating our concept and technology.',
    icon: <TrophyIcon sx={{ fontSize: 24 }} />
  },
  {
    year: '2025',
    title: 'Incubation Program',
    description: 'Joined the PUP TBIDO\'s incubation program, gaining mentorship and resources for growth.',
    icon: <SchoolIcon sx={{ fontSize: 24 }} />
  },
  {
    year: '2025',
    title: 'Startup QC Finalist',
    description: 'Became one of the finalists at Startup QC 2025 student category, expanding our network.',
    icon: <StarIcon sx={{ fontSize: 24 }} />
  },
  {
    year: '2025',
    title: 'Google Partnership',
    description: 'Grantee of Google for Startups Cloud Program, providing infrastructure for our growing platform.',
    icon: <CloudIcon sx={{ fontSize: 24 }} />
  },
  {
    year: '2025',
    title: 'Startup QC Awardee',
    description: 'Bronze Awardee in Startup QC 2025, recognizing our innovation and impact.',
    icon: <TrophyIcon sx={{ fontSize: 24 }} />
  }
];

const TimelineItem: React.FC<{ item: JourneyItem; index: number; isLast: boolean }> = ({ item, index, isLast }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLeft = index % 2 !== 0;

  return (
    <Box sx={{ position: 'relative', mb: isLast ? 0 : 8 }}>
      {/* Content Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'flex-start' : isLeft ? 'flex-end' : 'flex-start',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Content Card */}
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            width: isMobile ? '100%' : '45%',
            maxWidth: isMobile ? 'none' : '400px',
            backgroundColor: '#ffffff',
            borderColor: theme.palette.grey[300],
            borderTop: '4px solid #f3a203',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            ml: isMobile ? 7 : 0,
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 20px rgba(243, 162, 3, 0.15)',
            }
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#f3a203',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            {item.year}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#f3a203',
              mb: 1,
              fontFamily: 'Agrandir',
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            {item.description}
          </Typography>
        </Paper>
      </Box>

      {/* Timeline Circle */}
      <Box
        sx={{
          position: 'absolute',
          left: isMobile ? '24px' : '50%',
          top: '50%',
          transform: isMobile ? 'translateY(-50%)' : 'translate(-50%, -50%)',
          zIndex: 2,
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: '#f3a203',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(243, 162, 3, 0.4)',
        }}
      >
        {item.icon}
      </Box>
    </Box>
  );
};

const OurJourney: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="our-journey"
      sx={{
        py: 12,
        backgroundColor: theme.palette.grey[100],
        position: 'relative',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(161, 200, 151, 0.5) 0%, rgba(161, 200, 151, 0.2) 60%)`,
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#f3a203',
              mb: 2,
              fontFamily: 'Agrandir',
              fontWeight: 800
            }}
          >
            Our Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 'md',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            From a capstone project to an innovative agricultural technology solution, our growth story continues.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Central Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '24px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'rgba(243, 162, 3, 0.3)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              zIndex: 0,
            }}
          />
          
          {journeyData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === journeyData.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurJourney; 