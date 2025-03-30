import React, { useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typed from 'typed.js';
import ThreeBackground from '../components/three/ThreeBackground';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '../components/CustomComponents';
import Grid from '../components/CustomGrid';

// Tecnologias para exibir na página inicial
const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const TypedContainer = styled(Typography)(({ theme }) => ({
  minHeight: '2em',
  marginBottom: theme.spacing(4),
}));

const TechIcon = styled('img')(({ theme }) => ({
  width: 50,
  height: 50,
  margin: theme.spacing(1),
  transition: 'all 0.3s ease',
  filter: 'grayscale(40%)',
  '&:hover': {
    filter: 'grayscale(0%)',
    transform: 'scale(1.15) translateY(-5px)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #8e44ad 30%, #3498db 90%)',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(142, 68, 173, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 10px 4px rgba(142, 68, 173, .3)',
  },
}));

const Home: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Desenvolvedor Front-End',
          'Especialista em React',
          'Entusiasta de UI/UX',
          'Apaixonado por Tecnologia'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|',
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <ThreeBackground />
      <HeroSection component="section">
        <Container maxWidth="lg">
          <Grid container spacing={4} className="slide-up">
            <Grid item xs={12} md={8}>
              <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" component="div" sx={{ mb: 1, color: '#3498db' }}>
                  Olá, me chamo
                </Typography>
                <Typography variant="h2" component="h1" sx={{ 
                  fontWeight: 700, 
                  background: 'linear-gradient(90deg, #8e44ad, #3498db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}>
                  Matheus Kauan Pinto
                </Typography>
                <TypedContainer variant="h4" component="div">
                  <span ref={typedRef}></span>
                </TypedContainer>
                <Typography variant="body1" component="p" sx={{ mb: 3, maxWidth: 600, color: '#bbb' }}>
                  Bem-vindo ao meu portfólio digital! Sou um desenvolvedor apaixonado por criar experiências web interativas e estou em busca de oportunidades de estágio na área de TI.
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <StyledButton 
                    variant="contained" 
                    component={Link} 
                    to="/projects"
                    className="pulse"
                  >
                    Ver Projetos
                  </StyledButton>
                  <StyledButton 
                    variant="outlined" 
                    component={Link} 
                    to="/contact"
                    sx={{ 
                      background: 'transparent', 
                      border: '2px solid #8e44ad',
                      color: 'white'
                    }}
                  >
                    Contato
                  </StyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
              Tecnologias que utilizo:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {technologies.map((tech) => (
                <Box 
                  key={tech.name} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    marginRight: 3 
                  }}
                >
                  <TechIcon src={tech.icon} alt={tech.name} title={tech.name} />
                  <Typography variant="caption">{tech.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </HeroSection>
    </>
  );
};

export default Home; 