import React from 'react';
import { Container, LinearProgress, Paper, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  height: '100%',
}));

const SkillBar = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.MuiLinearProgress-colorPrimary`]: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #8e44ad 30%, #3498db 90%)',
  },
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(46, 46, 46, 0.5)',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(1),
  minHeight: 120,
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(142, 68, 173, 0.3)',
  },
}));

const SkillIcon = styled('img')(({ theme }) => ({
  width: 50,
  height: 50,
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
}));

// Lista de Hard Skills com nível de proficiência
const hardSkills = [
  { name: 'HTML5', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Three.js', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'Python', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

// Lista de Soft Skills
const softSkills = [
  { name: 'Organização', description: 'Capacidade de manter projetos estruturados e bem documentados' },
  { name: 'Proatividade', description: 'Iniciativa para resolver problemas e propor soluções antes que sejam solicitadas' },
  { name: 'Comunicação', description: 'Habilidade de expressar ideias de forma clara e eficiente' },
  { name: 'Trabalho em Equipe', description: 'Colaboração efetiva com colegas para alcançar objetivos comuns' },
  { name: 'Adaptabilidade', description: 'Capacidade de se ajustar a novas tecnologias e ambientes de trabalho' },
  { name: 'Resolução de Problemas', description: 'Análise e solução de problemas complexos de forma eficiente' },
];

const Skills: React.FC = () => {
  return (
    <PageSection component="section">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          className="section-title"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Minhas Habilidades
        </Typography>

        <Grid container spacing={4}>
          {/* Hard Skills */}
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3} className="slide-up">
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  mb: 4, 
                  background: 'linear-gradient(90deg, #8e44ad, #3498db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700
                }}
              >
                Hard Skills
              </Typography>

              {hardSkills.map((skill) => (
                <SkillBar key={skill.name}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        style={{ width: 24, height: 24, marginRight: 8 }} 
                      />
                      <Typography variant="body1">{skill.name}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={skill.level} />
                </SkillBar>
              ))}
            </StyledPaper>
          </Grid>

          {/* Soft Skills */}
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3} className="slide-up" sx={{ transitionDelay: '100ms' }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  mb: 4, 
                  background: 'linear-gradient(90deg, #8e44ad, #3498db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700
                }}
              >
                Soft Skills
              </Typography>

              <Grid container spacing={2}>
                {softSkills.map((skill) => (
                  <Grid item xs={6} sm={4} key={skill.name}>
                    <Tooltip title={skill.description} arrow placement="top">
                      <SkillCard elevation={2}>
                        <Typography variant="h6" component="h3" sx={{ mb: 1, textAlign: 'center' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bbb', textAlign: 'center' }}>
                          Clique para detalhes
                        </Typography>
                      </SkillCard>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>

        {/* Outras Tecnologias */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mt: 6, 
            mb: 4, 
            textAlign: 'center',
            background: 'linear-gradient(90deg, #8e44ad, #3498db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}
        >
          Outras Tecnologias
        </Typography>

        <Grid container justifyContent="center" className="fade-in">
          {[
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          ].map((tech) => (
            <Box key={tech.name} sx={{ m: 2, textAlign: 'center' }}>
              <SkillIcon src={tech.icon} alt={tech.name} />
              <Typography variant="body2">{tech.name}</Typography>
            </Box>
          ))}
        </Grid>
      </Container>
    </PageSection>
  );
};

export default Skills; 