import React, { useState } from 'react';
import { Container, TextField, Paper, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(142, 68, 173, 0.2)',
  color: 'white',
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(142, 68, 173, 0.4)',
    transform: 'translateY(-5px)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  background: 'linear-gradient(45deg, #8e44ad 30%, #3498db 90%)',
  borderRadius: 50,
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 10px 4px rgba(142, 68, 173, .3)',
  },
}));

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === '',
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Aqui você implementaria a lógica de envio real
      console.log('Formulário enviado:', formData);
      setSnackbarOpen(true);
      
      // Resetar formulário
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
          Contato
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className="slide-up">
            <StyledPaper elevation={3}>
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
                Entre em Contato
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <StyledTextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name ? "Por favor, informe seu nome" : ""}
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "Por favor, informe um email válido" : ""}
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message ? "Por favor, escreva sua mensagem" : ""}
                  variant="outlined"
                />
                
                <SubmitButton 
                  type="submit" 
                  variant="contained" 
                  endIcon={<SendIcon />}
                  fullWidth
                >
                  Enviar Mensagem
                </SubmitButton>
              </form>
              
              <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                  Mensagem enviada com sucesso! Retornarei em breve.
                </Alert>
              </Snackbar>
            </StyledPaper>
          </Grid>
          
          <Grid item xs={12} md={6} className="slide-up" sx={{ transitionDelay: '100ms' }}>
            <StyledPaper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                Conecte-se
              </Typography>
              
              <Typography variant="body1" paragraph>
                Estou sempre aberto a novas oportunidades, colaborações ou apenas para trocar ideias sobre desenvolvimento e tecnologia.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Você pode me encontrar nas seguintes plataformas:
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
                  <SocialButton 
                    aria-label="GitHub"
                    href="https://github.com/Matheuskauanjg"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                  >
                    <GitHubIcon fontSize="large" />
                  </SocialButton>
                  <Typography variant="body2" sx={{ mt: 1 }}>GitHub</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
                  <SocialButton 
                    aria-label="LinkedIn"
                    href="https://linkedin.com/in/matheus-kauan"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{ color: '#0077B5' }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </SocialButton>
                  <Typography variant="body2" sx={{ mt: 1 }}>LinkedIn</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
                  <SocialButton 
                    aria-label="Email"
                    href="mailto:matheuskauan@example.com"
                    size="large"
                    sx={{ color: '#EA4335' }}
                  >
                    <EmailIcon fontSize="large" />
                  </SocialButton>
                  <Typography variant="body2" sx={{ mt: 1 }}>Email</Typography>
                </Box>
              </Box>
              
              <Box sx={{ flexGrow: 1 }} />
              
              <Typography variant="body1" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic', color: '#bbb' }}>
                "A tecnologia é melhor quando aproxima as pessoas."
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default Contact; 