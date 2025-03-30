import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const NavContainer = styled(AppBar)(({ theme }) => ({
  background: 'rgba(18, 18, 18, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavLink = styled(Link)<{ active: string }>(({ theme, active }) => ({
  color: active === 'true' ? theme.palette.primary.main : '#fff',
  margin: '0 15px',
  padding: '5px 0',
  position: 'relative',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: active === 'true' ? '100%' : '0',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const Logo = styled('div')({
  fontWeight: 700,
  fontSize: '1.5rem',
  background: 'linear-gradient(90deg, #8e44ad, #3498db)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const MobileNavLink = styled(Link)<{ active: string }>(({ theme, active }) => ({
  color: active === 'true' ? theme.palette.primary.main : '#fff',
  padding: '10px 20px',
  display: 'block',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(142, 68, 173, 0.1)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'true' : 'false';
  };

  const navLinks = [
    { text: 'Início', path: '/' },
    { text: 'Sobre', path: '/about' },
    { text: 'Habilidades', path: '/skills' },
    { text: 'Projetos', path: '/projects' },
    { text: 'Contato', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', padding: '20px 0' }}>
      <Logo>Matheus Kauan</Logo>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <MobileNavLink 
              to={link.path} 
              active={isActive(link.path)}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={link.text} />
            </MobileNavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <NavContainer position="fixed" sx={{ 
        boxShadow: scrolling ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <Logo>Matheus Kauan</Logo>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} active={isActive(link.path)}>
                  {link.text}
                </NavLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </NavContainer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: '#121212' },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Espaçamento para compensar a navbar fixa */}
    </>
  );
};

export default Navbar; 