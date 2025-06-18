import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
}

const events: Event[] = [
  {
    id: 'e',
    title: 'Agri-Industry Reverse Pitching',
    description: 'Team Anehan participated in the Agri-Industry Reverse Pitching organized by the Entrepinoy Volunteers Foundation, Inc. (EVFI), co-presented by SCALE NCR, and powered by DOST NCR. Held at the FEU Tech Innovation Center, this event served as a collaborative space for student innovators across different universities to present agricultural technology ideas. The event aimed to foster innovative problem-solving in the agri-sector, bridging the gap between research, technology, and real-world application.',
    date: 'February 10, 2025',
    location: 'FEU Tech Innovation Center',
    images: ['/showcase/e1.jpg', '/showcase/e2.jpg'],
  },
  {
    id: 'j',
    title: 'Startup Leaders Roundtable & Networking Session',
    description: 'Team Anehan took part in a high-impact networking session with accomplished entrepreneurs and startup leaders. Among those present were Ms. Gabrielle Tan Lay Khim (Assistant Director, SMU), Mr. Patrick Roland De Guzman (Founder, Saltric), Ms. Alyssa Casandra Wee (Co-Founder & COO, Dormy PH), Ms. Uma Louise Roa (Founder, Pic-A-Talk), and Ms. Raffy Mae Alidon and Mr. Oliver Santos (Country Directors, Wavesparks PH). The session facilitated rich discussions on startup growth, operational scalability, investor readiness, and leadership development.',
    date: 'February 17, 2025',
    location: 'Quezon City, Philippines',
    images: ['/showcase/j1.jpg', '/showcase/h1.jpg', '/showcase/h2.jpg', '/showcase/h3.jpg'],
  },
  {
    id: 'l',
    title: 'PUP Cabiao Campus',
    description: 'Team Anehan presented its startup concept to Mr. Fernan Estingor of PUP Cabiao, securing formal endorsement and institutional support. This endorsement helped establish Team Anehan\'s credibility within academic circles and enabled key connections with the local government of Cabiao. Additionally, the team introduced its marketing strategist from PUP Cabiao, ensuring alignment and transparency.',
    date: 'February 24, 2025',
    location: 'Cabiao, Nueva Ecija',
    images: ['/showcase/l1.jpg'],
  },
  {
    id: 'a',
    title: 'Stakeholder Engagement – LGU Gapan, Nueva Ecija',
    description: 'The team conducted a stakeholder meeting with Mayor Joy Pascual of Gapan City, Nueva Ecija. The mayor pledged her endorsement and introduced Team Anehan to the Municipal Agriculture Office (MAO). The LGU expressed its willingness to support platform testing and to connect the team with key players in the city’s agricultural landscape.',
    date: 'February 24, 2025',
    location: 'Gapan, Nueva Ecija',
    images: ['/showcase/a1.jpg', '/showcase/a2.jpg'],
    
  },
  {
    id: 'g',
    title: 'Project Presentation – LGU Cabiao, Nueva Ecija',
    description: 'Team Anehan formally introduced its agri-platform to the Local Government Unit (LGU) of Cabiao, Nueva Ecija. The meeting, attended by Mayor Rav Kevin Rivera, focused on identifying how the platform could serve the municipality’s agricultural stakeholders, especially smallholder farmers. The LGU expressed strong interest and offered support in providing logistical and stakeholder data for future implementation.',
    date: 'February 24, 2025',
    location: 'Cabiao, Nueva Ecija',
    images: ['/showcase/g1.jpg', '/showcase/g2.jpg'],
  },
  {
    id: 'k',
    title: 'Technical Meeting – MAO Gapan',
    description: 'Team Anehan met with representatives from the Municipal Agriculture Office of Gapan to acquire comprehensive local agricultural data. The MAO shared a directory of cooperatives, milling firms, and farmer groups that could benefit from the platform. They also offered to endorse Team Anehan to these stakeholders and support pilot testing initiatives.',
    date: 'February 24, 2025',
    location: 'Gapan, Nueva Ecija',
    images: ['/showcase/k1.jpg'],
  },
  {
    id: 'c',
    title: 'Institutional Presentation – National Food Authority (NFA)',
    description: 'Team Anehan held a strategic presentation with the Regional Manager and Branch Manager of the National Food Authority (NFA). Discussions centered on food security, rice supply chain management, and potential synergies with the Anehan platform. Both NFA officials expressed willingness to support the project, offered additional insights to strengthen the platform, and issued verbal endorsements.',
    date: 'February 25, 2025',
    location: 'NFA Region 3, Nueva Ecija',
    images: ['/showcase/c1.jpg', '/showcase/c2.jpg', '/showcase/c3.jpg', '/showcase/f1.jpg', '/showcase/f2.jpg'],
  },
 


  // {
  //   id: 'f',
  //   title: 'Digital Agriculture Forum',
  //   description: 'Exploring the future of farming through digital transformation.',
  //   date: 'November 2023',
  //   location: 'Tarlac, Philippines',
  //   images: [],
  // },

  // {
  //   id: 'h',
  //   title: 'Sustainable Farming Workshop',
  //   description: 'Training farmers on eco-friendly and sustainable agricultural practices.',
  //   date: 'September 2023',
  //   location: 'Bataan, Philippines',
  //   images: ['/showcase/h1.jpg', '/showcase/h2.jpg', '/showcase/h3.jpg'],
  // },
  {
    id: 'i',
    title: 'Community Engagement – LGU and MAO Peñaranda, Nueva Ecija',
    description: 'Team Anehan met with Mayor Joey A. Ramos and representatives from the MAO of Peñaranda to present its solution for farmer-market linkages. The LGU expressed alignment with the project’s goals and offered to assist in deployment logistics, farmer data collection, and community awareness for future pilots.',
    date: 'February 25, 2025',
    location: 'Nueva Ecija, Philippines',
    images: ['/showcase/i1.jpg', '/showcase/i2.jpg'],
  },
  {
    id: 'b',
    title: 'Provincial Entry – LGU Sta. Ignacia, Tarlac',
    description: 'This marked Team Anehan’s first formal engagement in Tarlac Province. The team met with Mayor Nora Modomo of Sta. Ignacia to present its technology platform. The mayor issued a formal endorsement and directed the team to collaborate with their MAO for localized data and implementation planning.',
    date: 'February 26, 2025',
    location: 'Sta Ignacia, Tarlac',
    images: ['/showcase/b1.jpg', '/showcase/b2.jpg', '/showcase/b3.jpg'],
  },

 
  {
    id: 'm',
    title: 'Startup QC Student Competition – Finalist and Bronze Awardee',
    description: 'Team Anehan successfully participated in the Startup QC Student Competition, an initiative of the Quezon City Government through QC LEDIPO, aimed at nurturing innovation and entrepreneurship among student-led startups. Out of a large pool of participants, Team Anehan advanced to the final round and was awarded Bronze. The program, spearheaded by QC LEDIPO Head Jay Gatmaitan, recognizes impactful and scalable solutions addressing real-world problems. The team’s recognition affirms its strong value proposition in the agri-tech sector and reflects its readiness for future growth and implementation.',
    date: 'May 23, 2025',
    location: 'Quezon City, Philippines',
    images: ['/showcase/m1.jpg', '/showcase/m2.jpg', '/showcase/m3.jpg'],
  },
];

const Showcase: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(30); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(30);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Add global event listeners for drag functionality
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleGlobalDragMove(e);
    const handleGlobalMouseUp = () => handleDragEnd();
    const handleGlobalTouchMove = (e: TouchEvent) => handleGlobalDragMove(e);
    const handleGlobalTouchEnd = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging, startY, startHeight, bottomSheetHeight]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
    setBottomSheetHeight(30);
  };

  const handleNextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setStartHeight(bottomSheetHeight);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
  };


  const handleGlobalDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - clientY;
    const windowHeight = window.innerHeight;
    const deltaPercent = (deltaY / windowHeight) * 100;
    
    let newHeight = startHeight + deltaPercent;
    newHeight = Math.max(15, Math.min(75, newHeight)); // Constrain between 15% and 75%
    
    setBottomSheetHeight(newHeight);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Snap to nearest position
    if (bottomSheetHeight < 25) {
      setBottomSheetHeight(15); // Minimized
    } else if (bottomSheetHeight < 50) {
      setBottomSheetHeight(30); // Default
    } else {
      setBottomSheetHeight(70); // Expanded
    }
  };

  return (
    <Box
      id="showcase"
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 800,
            color: '#f3a203',
            fontFamily: 'Agrandir, sans-serif',
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
          Event Showcase
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#00c261',
            maxWidth: 600,
            mx: 'auto',
            fontFamily: 'Agrandir, sans-serif',
          }}
        >
          Join us as we connect with farmers, innovators, and industry leaders across the Philippines
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {events.map((event) => (
            <Card
              key={event.id}
              elevation={0}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 21px)' },
                maxWidth: 350,
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-12px)',
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
                  zIndex: 1,
                },
              }}
              onClick={() => handleEventClick(event)}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.images[0]}
                  alt={event.title}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    aspectRatio: '4/3',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    background: 'rgba(243, 162, 3, 0.9)',
                    color: 'white',
                    borderRadius: 2,
                    px: 1,
                    py: 0.5,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}
                >
                  {event.images.length} 📸
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3, position: 'relative' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: '#f3a203',
                    fontFamily: 'Agrandir, sans-serif',
                    lineHeight: 1.3,
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {event.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00c261',
                      display: 'block',
                      fontWeight: 600,
                    }}
                  >
                    📅 {event.date}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00c261',
                      display: 'block',
                      fontWeight: 600,
                    }}
                  >
                    📍 {event.location}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#f3a203',
                      fontWeight: 'bold',
                      mt: 1,
                    }}
                  >
                    📸 {event.images.length} photo{event.images.length > 1 ? 's' : ''}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Image Gallery Dialog - Desktop */}
      {!fullScreen && (
        <Dialog
          open={!!selectedEvent}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
            },
          }}
        >
          <DialogContent
            sx={{
              p: 0,
              position: 'relative',
              bgcolor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
            }}
          >
            {selectedEvent && (
              <>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)',
                    },
                    zIndex: 2,
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Box
                  component="img"
                  src={selectedEvent.images[currentImageIndex]}
                  alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: 1,
                  }}
                />

                {selectedEvent.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevImage}
                      sx={{
                        position: 'absolute',
                        left: 16,
                        top: '40%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.7)',
                        width: 56,
                        height: 56,
                        zIndex: 3,
                        '&:hover': {
                          bgcolor: 'rgba(0,0,0,0.8)',
                        },
                      }}
                    >
                      <NavigateBeforeIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: 'absolute',
                        right: 16,
                        top: '40%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.7)',
                        width: 56,
                        height: 56,
                        zIndex: 3,
                        '&:hover': {
                          bgcolor: 'rgba(0,0,0,0.8)',
                        },
                      }}
                    >
                      <NavigateNextIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                  </>
                )}

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.85)',
                    color: 'white',
                    p: 3,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      fontFamily: 'Agrandir, sans-serif',
                      fontSize: '1.25rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {selectedEvent.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1,
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {selectedEvent.description}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#bdc3c7',
                      fontSize: '0.75rem',
                      display: 'block',
                      lineHeight: 1.4,
                    }}
                  >
                    {selectedEvent.date} • {selectedEvent.location} • Image {currentImageIndex + 1} of {selectedEvent.images.length}
                  </Typography>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}

      {/* Image Gallery Dialog - Mobile */}
      {fullScreen && (
        <Dialog
          open={!!selectedEvent}
          onClose={handleClose}
          fullScreen
          PaperProps={{
            sx: {
              bgcolor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <DialogContent
            sx={{
              p: 0,
              position: 'relative',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {selectedEvent && (
              <>
                {/* Header with close button */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    p: 2,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  }}
                >
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      color: 'white',
                      bgcolor: 'rgba(0,0,0,0.6)',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.8)',
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                {/* Image container */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    minHeight: '50vh',
                  }}
                >
                  <Box
                    component="img"
                    src={selectedEvent.images[currentImageIndex]}
                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />

                  {selectedEvent.images.length > 1 && (
                    <>
                      <IconButton
                        onClick={handlePrevImage}
                        sx={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'white',
                          bgcolor: 'rgba(0,0,0,0.7)',
                          width: 48,
                          height: 48,
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.8)',
                          },
                          '&:active': {
                            bgcolor: 'rgba(0,0,0,0.9)',
                            transform: 'translateY(-50%) scale(0.95)',
                          },
                        }}
                      >
                        <NavigateBeforeIcon sx={{ fontSize: 28 }} />
                      </IconButton>

                      <IconButton
                        onClick={handleNextImage}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'white',
                          bgcolor: 'rgba(0,0,0,0.7)',
                          width: 48,
                          height: 48,
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.8)',
                          },
                          '&:active': {
                            bgcolor: 'rgba(0,0,0,0.9)',
                            transform: 'translateY(-50%) scale(0.95)',
                          },
                        }}
                      >
                        <NavigateNextIcon sx={{ fontSize: 28 }} />
                      </IconButton>
                    </>
                  )}
                </Box>

                                 {/* Draggable bottom sheet */}
                 <Box
                   sx={{
                     position: 'absolute',
                     bottom: 0,
                     left: 0,
                     right: 0,
                     bgcolor: 'rgba(0,0,0,0.9)',
                     color: 'white',
                     borderTopLeftRadius: 16,
                     borderTopRightRadius: 16,
                     backdropFilter: 'blur(8px)',
                     height: `${bottomSheetHeight}vh`,
                     overflow: 'hidden',
                     display: 'flex',
                     flexDirection: 'column',
                     transition: isDragging ? 'none' : 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                   }}
                 >
                   {/* Drag handle */}
                   <Box
                     sx={{
                       width: 40,
                       height: 4,
                       bgcolor: 'rgba(255,255,255,0.3)',
                       borderRadius: 2,
                       mx: 'auto',
                       mt: 1,
                       mb: 2,
                       cursor: 'grab',
                       '&:active': {
                         cursor: 'grabbing',
                       },
                     }}
                     onMouseDown={handleDragStart}
                     onTouchStart={handleDragStart}
                   />
                  
                  {/* Content */}
                  <Box
                    sx={{
                      px: 3,
                      pb: 3,
                      overflow: 'auto',
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontFamily: 'Agrandir, sans-serif',
                        fontSize: '1.1rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {selectedEvent.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 3,
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.9)',
                      }}
                    >
                      {selectedEvent.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#f3a203',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                        }}
                      >
                        📅 {selectedEvent.date}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#00c261',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                        }}
                      >
                        📍 {selectedEvent.location}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#bdc3c7',
                          fontSize: '0.8rem',
                        }}
                      >
                        📸 Image {currentImageIndex + 1} of {selectedEvent.images.length}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default Showcase; 