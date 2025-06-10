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

const teams: Record<string, (Member | undefined)[]> = {
  'CMO': marketingTeam,
  'COO': techTeam,
  'CFO': []
};

const MemberCard = ({ member, isManager = false }: { member: Member, isManager?: boolean }) => (
  <Paper
    variant="outlined"
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      backgroundColor: '#ffffff',
      borderColor: (theme) => theme.palette.grey[300],
      borderTop: (theme) => `4px solid ${isManager ? theme.palette.primary.main : theme.palette.primary.light}`,
      transition: 'box-shadow 0.3s, transform 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: (theme) => `0 8px 20px ${alpha(theme.palette.primary.dark, 0.08)}`,
      }
    }}
  >
    <Avatar src={member.image} alt={member.name} sx={{ width: 80, height: 80, mb: 2, border: theme => `3px solid ${theme.palette.primary.light}` }} />
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>{member.name}</Typography>
    <Typography variant="body1" color="primary.main" sx={{ mb: 1, fontWeight: 'medium' }}>{member.role}</Typography>
    <Typography variant="caption" color="text.secondary">{member.description}</Typography>
  </Paper>
);

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
          <Typography variant="h2" component="h2" sx={{ color: 'primary.dark', mb: 2, fontFamily: 'Agrandir', fontWeight: 800 }}>
            Our Team
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 'md', mx: 'auto' }}>
            Meet the talented individuals behind Anehan's success. Our diverse team brings together expertise from various fields to create innovative solutions.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* CEO */}
          <Box sx={{ mb: 2, width: { xs: '80%', sm: '50%', md: '35%', lg: '25%' } }}>
            <MemberCard member={ceo} isManager />
          </Box>
          
          {/* Connector to Managers */}
          <Box sx={{ width: '2px', height: '40px', bgcolor: 'grey.300' }} />

          {/* Managers Row */}
          <Box sx={{ width: '100%', position: 'relative' }}>
             <Box sx={{
                position: 'absolute',
                top: 0,
                left: { xs: 0, md: '16.66%' },
                right: { xs: 0, md: '16.66%' },
                height: '2px',
                bgcolor: 'grey.300',
                display: { xs: 'none', md: 'block' }
            }}/>
            <Grid container spacing={4} justifyContent="center">
              {managers.map(manager => (
                manager && (
                  <Grid size={{ xs: 12, md: 4 }} key={manager.name}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {/* Connector from horizontal line */}
                      <Box sx={{ width: '2px', height: '20px', bgcolor: 'grey.300' }} />
                      <Box sx={{ mb: 2, width: '85%' }}>
                        <MemberCard member={manager} isManager />
                      </Box>
                      
                      {/* Team under manager */}
                      {(teams[manager.role] || []).length > 0 && (
                        <>
                          <Box sx={{ width: '2px', height: '20px', bgcolor: 'grey.300' }} />
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '85%' }}>
                            {(teams[manager.role] || []).map(member => (
                              member && <MemberCard key={member.name} member={member} />
                            ))}
                          </Box>
                        </>
                      )}
                    </Box>
                  </Grid>
                )
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team; 