import React, { useState } from 'react';
import { Container, Card, CardContent, CardActions, CardMedia, Chip, Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Typography, Button, IconButton } from '../components/CustomComponents';
import Grid from '../components/CustomGrid';

const PageSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-10px)',
    '& .project-overlay': {
      opacity: 1,
    },
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9
  position: 'relative',
  transition: 'transform 0.5s ease',
}));

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(142, 68, 173, 0.2)',
  color: '#fff',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: 'rgba(142, 68, 173, 0.4)',
  },
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  textTransform: 'none',
}));

// Lista de projetos
const projects = [
  {
    id: 1,
    title: 'Portfólio Interativo',
    description: 'Este site de portfólio pessoal com animações 3D e interface interativa. Criado com React e Three.js para uma experiência de usuário única.',
    image: 'https://placehold.co/800x450/3498db/FFFFFF?text=Portf%C3%B3lio+Interativo',
    technologies: ['React', 'Three.js', 'TypeScript', 'Material UI'],
    github: 'https://github.com/Matheuskauanjg',
    liveDemo: '#',
    details: 'Um portfólio digital interativo com animações 3D, efeitos visuais e reprodução de música lofi. O projeto explora técnicas avançadas de UI/UX e integra Three.js para criar elementos visuais imersivos. Design responsivo para todos os dispositivos.',
  },
  {
    id: 2,
    title: 'To-Do List',
    description: 'Aplicativo de lista de tarefas com funcionalidades de organização, priorização e categorização. Design moderno e intuitivo.',
    image: 'https://placehold.co/800x450/8e44ad/FFFFFF?text=To-Do+List+App',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Matheuskauanjg/todo-list',
    liveDemo: '#',
    details: 'Lista de tarefas com recursos para adicionar, editar, remover e marcar tarefas como concluídas. Inclui filtragem por categorias, armazenamento local e tema escuro/claro. Interface responsiva e amigável para o usuário.',
  },
  {
    id: 3,
    title: 'Dashboard Financeiro',
    description: 'Dashboard para visualização e análise de dados financeiros pessoais com gráficos interativos e relatórios detalhados.',
    image: 'https://placehold.co/800x450/e74c3c/FFFFFF?text=Finance+Dashboard',
    technologies: ['React', 'Chart.js', 'Node.js'],
    github: 'https://github.com/Matheuskauanjg/finance-dashboard',
    liveDemo: '#',
    details: 'Dashboard financeiro que permite aos usuários cadastrar receitas e despesas, visualizar transações em diferentes períodos e analisar gastos por categoria. Inclui gráficos interativos, relatórios exportáveis e sistema de metas financeiras.',
  },
  {
    id: 4,
    title: 'Calculadora',
    description: 'Calculadora com design moderno, suporte a operações básicas e avançadas, histórico de cálculos e temas personalizáveis.',
    image: 'https://placehold.co/800x450/2ecc71/FFFFFF?text=Calculator+App',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Matheuskauanjg/calculator',
    liveDemo: '#',
    details: 'Calculadora com operações aritméticas básicas e funções científicas. Interface adaptável para desktop e mobile, histórico de cálculos, temas personalizáveis e design intuitivo.',
  },
  {
    id: 5,
    title: 'Projeto Busca-Livro',
    description: 'Aplicação para busca de livros utilizando a Google Books API. Permite pesquisar, visualizar detalhes e salvar livros favoritos.',
    image: 'https://placehold.co/800x450/f39c12/FFFFFF?text=Book+Search+App',
    technologies: ['React', 'Google Books API', 'CSS'],
    github: 'https://github.com/Matheuskauanjg/book-finder',
    liveDemo: '#',
    details: 'Aplicação para busca e descoberta de livros através da Google Books API. Funcionalidades incluem pesquisa por título, autor ou categoria, visualização de detalhes como sinopse, avaliações e informações do autor, além de sistema de favoritos para salvar livros de interesse.',
  },
];

// Alterar aqui para resolver o problema de h2 aninhado
const ProjectDialogTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'relative',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Projects: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenDialog = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <PageSection component="section">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          className="section-title"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Meus Projetos
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4} className="fade-in">
              <ProjectCard elevation={3}>
                <ProjectMedia
                  image={project.image}
                  title={project.title}
                />
                <ProjectOverlay className="project-overlay">
                  <Button 
                    variant="contained"
                    onClick={() => handleOpenDialog(project)}
                    color="primary"
                  >
                    Ver Detalhes
                  </Button>
                </ProjectOverlay>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2, color: '#bbb' }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 1 }}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <TechChip key={index} label={tech} size="small" />
                    ))}
                    {project.technologies.length > 3 && (
                      <TechChip label={`+${project.technologies.length - 3}`} size="small" />
                    )}
                  </Box>
                </CardContent>
                <CardActions>
                  <ProjectButton 
                    size="small" 
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </ProjectButton>
                  <ProjectButton 
                    size="small" 
                    startIcon={<LaunchIcon />}
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </ProjectButton>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        {/* Dialog com detalhes do projeto */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          {selectedProject && (
            <>
              {/* Aqui está a correção para o problema de h2 aninhado */}
              <ProjectDialogTitle>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </ProjectDialogTitle>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Descrição
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {selectedProject.details}
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom>
                      Tecnologias Utilizadas
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3 }}>
                      {selectedProject.technologies.map((tech, index) => (
                        <TechChip key={index} label={tech} />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                      <Button 
                        variant="contained" 
                        startIcon={<GitHubIcon />}
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mr: 2 }}
                      >
                        Ver no GitHub
                      </Button>
                      <Button 
                        variant="outlined" 
                        startIcon={<LaunchIcon />}
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Demo
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </PageSection>
  );
};

export default Projects; 