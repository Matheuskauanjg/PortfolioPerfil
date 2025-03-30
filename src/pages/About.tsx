import React, { ReactNode } from 'react';
import { Container, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Box, Typography } from '../components/CustomComponents';
import Grid from '../components/CustomGrid';

const PageSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #8e44ad, #3498db)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

// Corrigindo AboutInfoItem para aceitar children
interface AboutInfoItemProps {
  children?: ReactNode;
}

const AboutInfoItem = styled(Box)<AboutInfoItemProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
}));

// Corrigindo IconWrapper para aceitar children
interface IconWrapperProps {
  children?: ReactNode;
}

const IconWrapper = styled(Box)<IconWrapperProps>(({ theme }) => ({
  marginRight: theme.spacing(2),
  backgroundColor: 'rgba(142, 68, 173, 0.2)',
  borderRadius: '50%',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  border: '4px solid #8e44ad',
  boxShadow: '0 8px 32px rgba(142, 68, 173, 0.5)',
}));

// Adicionando uma função para tratar erro de carregamento de imagem
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = 'https://placehold.co/200x200/3498db/FFFFFF?text=MK';
};

const About: React.FC = () => {
  return (
    <PageSection component="section">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          className="section-title"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Sobre Mim
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeAvatar
              alt="Matheus Kauan Pinto"
              src="https://github.com/Matheuskauanjg.png"
              className="fade-in"
              imgProps={{ 
                onError: handleImageError 
              }}
            />
            <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
              Matheus Kauan Pinto
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: '#bbb' }}>
              Desenvolvedor Front-End
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <StyledPaper elevation={3} className="slide-up">
              <GradientText variant="h4" component="h2" sx={{ mb: 3 }}>
                Minha História
              </GradientText>
              <Typography variant="body1" paragraph>
                Sou um desenvolvedor apaixonado por tecnologia e resolução de problemas. Minha jornada na programação começou com a curiosidade em entender como funcionam os websites e aplicações que uso no dia a dia.
              </Typography>
              <Typography variant="body1" paragraph>
                Sempre fui fascinado pela capacidade da tecnologia de conectar pessoas e transformar ideias em soluções reais. Essa paixão me levou a explorar diversas linguagens de programação e ferramentas de desenvolvimento.
              </Typography>
              <Typography variant="body1" paragraph>
                Atualmente, estou em busca de oportunidades de estágio na área de TI, onde posso aplicar meus conhecimentos, colaborar com equipes talentosas e continuar evoluindo como profissional.
              </Typography>
            </StyledPaper>

            <StyledPaper elevation={3} className="slide-up" sx={{ transitionDelay: '100ms' }}>
              <GradientText variant="h4" component="h2" sx={{ mb: 3 }}>
                O Que Faço
              </GradientText>

              <AboutInfoItem>
                <IconWrapper>
                  <ComputerIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    Desenvolvimento Front-End
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#bbb' }}>
                    Crio interfaces web interativas e responsivas utilizando HTML, CSS, JavaScript e React. Sempre com foco em usabilidade e experiência do usuário.
                  </Typography>
                </Box>
              </AboutInfoItem>

              <AboutInfoItem>
                <IconWrapper>
                  <SchoolIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    Aprendizado Contínuo
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#bbb' }}>
                    Estou sempre estudando novas tecnologias e aprimorando minhas habilidades técnicas. Atualmente, estou aprofundando meus conhecimentos em Three.js e TypeScript.
                  </Typography>
                </Box>
              </AboutInfoItem>

              <AboutInfoItem>
                <IconWrapper>
                  <EmojiObjectsIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    Resolução de Problemas
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#bbb' }}>
                    Adoro encontrar soluções criativas para problemas complexos, transformando desafios em oportunidades de aprendizado e crescimento.
                  </Typography>
                </Box>
              </AboutInfoItem>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default About; 