import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  alpha,
  Grid,
} from '@mui/material';

interface Member {
  name: string;
  role: string;
  image: string;
  description: string;
}

const allMembers: Member[] = [
  {
    name: 'Aldrin Abenoja',
    role: 'CEO',
    image: 'members/aldrin.jpg',
    description: "Leads the company's overall vision, strategy, and growth, ensuring the team is aligned towards its core mission."
  },
  {
    name: 'John Angelo Basco',
    role: 'CMO',
    image: 'members/angelo.jpg',
    description: "Drives the marketing strategy, brand positioning, and customer acquisition to expand Anehan's market presence." 
  },
  {
    name: 'Francisco Theodore',
    role: 'CFO',
    image: 'members/francisco.jpg',
    description: "Oversees financial planning, management, and reporting to ensure the company's long-term fiscal health."
  },
  {
    name: 'Joerel Belen',
    role: 'COO',
    image: 'members/joerel.jpg',
    description: 'Manages daily operations and ensures organizational effectiveness to deliver value to our partners and users.'
  },
  {
    name: 'Kimberly Lapuz',
    role: 'Sales Officer',
    image: 'members/kimberly.jpg',
    description: 'Executes marketing campaigns and manages digital content to engage our community and drive growth.'
  },
  {
    name: 'Kyla Mae Sorongan',
    role: 'Marketing Officer',
    image: 'members/kyla.jpg',
    description: 'Builds and maintains strong partner relationships, driving sales and identifying new business opportunities.'
  },
  {
    name: 'Jobert Mampusti',
    role: 'CTO & Blockchain Developer',
    image: 'members/jobert.jpg',
    description: 'Leads the technological vision and development of our innovative blockchain-based platform.'
  },
  {
    name: 'JM Cabrera',
    role: 'CIO & Cyber Security Officer',
    image: 'members/jm.jpg',
    description: 'Manages IT infrastructure and fortifies our platform against cyber threats to ensure data integrity and security.'
  },
  {
    name: 'Ivhan Salazar',
    role: 'Full Stack Developer',
    image: 'members/ivhanpic.jpg',
    description: 'Develops and maintains both client-side and server-side applications, ensuring a seamless user experience.'
  },
];

const findMember = (name: string): Member | undefined => allMembers.find(m => m.name === name);

const ceo = findMember('Aldrin Abenoja');
const managers = [findMember('John Angelo Basco'), findMember('Francisco Theodore'), findMember('Joerel Belen')];
const marketingTeam = [findMember('Kyla Mae Sorongan'), findMember('Kimberly Lapuz')];
const techTeam = [findMember('Jobert Mampusti'), findMember('JM Cabrera'), findMember('Ivhan Salazar')];


const MemberCard = ({ member, isManager = false, isCEO = false }: { member: Member, isManager?: boolean, isCEO?: boolean }) => {
  const cardColor = isCEO ? '#f3a203' : isManager ? '#f3a203' : '#00c261';
  const bgGradient = isCEO 
    ? 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)'
    : isManager 
    ? 'linear-gradient(135deg, #f3a203 0%, #ff9e00 100%)'
    : 'linear-gradient(135deg, #00c261 0%, #00a555 100%)';
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        background: 'white',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: isCEO 
              ? '0 20px 40px rgba(243, 162, 3, 0.25), 0 20px 40px rgba(0, 194, 97, 0.15)' 
              : isManager 
              ? '0 12px 32px rgba(243, 162, 3, 0.2)' 
              : '0 12px 32px rgba(0, 194, 97, 0.2)',
          },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: isCEO ? '6px' : '4px',
          background: bgGradient,
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          mb: 2,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: -8,
            left: -8,
            right: -8,
            bottom: -8,
            borderRadius: '50%',
            background: `${cardColor}15`,
            zIndex: 0,
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            '&::before': isCEO ? {
              content: '""',
              position: 'absolute',
              top: -6,
              left: -6,
              right: -6,
              bottom: -6,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f3a203 0%, #00c261 100%)',
              zIndex: 0,
            } : {},
          }}
        >
          <Avatar 
            src={member.image} 
            alt={member.name} 
            sx={{ 
              width: isCEO ? 100 : 80, 
              height: isCEO ? 100 : 80, 
              border: isCEO ? `4px solid white` : `4px solid ${cardColor}`,
              position: 'relative',
              zIndex: 1,
              boxShadow: isCEO 
                ? '0 8px 24px rgba(243, 162, 3, 0.3), 0 8px 24px rgba(0, 194, 97, 0.2)' 
                : `0 8px 24px ${cardColor}40`,
            }} 
          />
        </Box>
      </Box>
      <Typography 
        variant={isCEO ? "h5" : "h6"} 
        sx={{ 
          fontWeight: 'bold', 
          color: isCEO ? 'transparent' : cardColor,
          background: isCEO ? 'linear-gradient(135deg, #f3a203, #00c261)' : 'transparent',
          backgroundClip: isCEO ? 'text' : 'initial',
          WebkitBackgroundClip: isCEO ? 'text' : 'initial',
          mb: 0.5,
          fontFamily: 'Agrandir, sans-serif'
        }}
      >
        {member.name}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: isCEO ? 'transparent' : cardColor,
          background: isCEO ? 'linear-gradient(135deg, #f3a203, #00c261)' : 'transparent',
          backgroundClip: isCEO ? 'text' : 'initial',
          WebkitBackgroundClip: isCEO ? 'text' : 'initial',
          mb: 2, 
          fontWeight: 600,
          fontSize: isCEO ? '1rem' : '0.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        {member.role}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: 'text.secondary',
          lineHeight: 1.6,
          fontSize: '0.875rem'
        }}
      >
        {member.description}
      </Typography>
    </Paper>
  );
};

const Team: React.FC = () => {
  if (!ceo) return null;

  return (
    <Box
      component="section"
      id="team"
      sx={{
        py: 12,
        backgroundColor: (theme) => theme.palette.grey[100],
        position: 'relative',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, transparent 60%)`,
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ color: '#f3a203', mb: 2, fontFamily: 'Agrandir', fontWeight: 800 }}>
            Our Team
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 'md', mx: 'auto' }}>
            Meet the talented individuals behind Anehan's success. Our diverse team brings together expertise from various fields to create innovative solutions.
          </Typography>
        </Box>

                {/* CEO Section */}
        <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' } }}>
            <MemberCard member={ceo} isCEO />
          </Box>
        </Box>
        
        {/* Leadership Team */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 4, 
              color: '#f3a203', 
              fontFamily: 'Agrandir, sans-serif',
              fontWeight: 700,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: 'linear-gradient(135deg, #f3a203 0%, #ff9e00 100%)',
                borderRadius: 2,
              }
            }}
          >
            Leadership Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {managers.map(manager => (
              manager && (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={manager.name}>
                  <MemberCard member={manager} isManager />
                </Grid>
              )
            ))}
          </Grid>
        </Box>

        {/* Team Members by Department */}
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              color: '#00c261', 
              fontFamily: 'Agrandir, sans-serif',
              fontWeight: 700,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: 'linear-gradient(135deg, #00c261 0%, #00a555 100%)',
                borderRadius: 2,
              }
            }}
          >
            Our Team
          </Typography>
          
          {/* Marketing & Sales Team */}
          {marketingTeam.some(member => member) && (
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 3, 
                  color: '#00c261',
                  fontFamily: 'Agrandir, sans-serif',
                  fontWeight: 600
                }}
              >
                Marketing & Sales
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                {marketingTeam.map(member => (
                  member && (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
                      <MemberCard member={member} />
                    </Grid>
                  )
                ))}
              </Grid>
            </Box>
          )}

          {/* Technology Team */}
          {techTeam.some(member => member) && (
            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 3, 
                  color: '#00c261',
                  fontFamily: 'Agrandir, sans-serif',
                  fontWeight: 600
                }}
              >
                Technology
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                {techTeam.map(member => (
                  member && (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
                      <MemberCard member={member} />
                    </Grid>
                  )
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Team; 