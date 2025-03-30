import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Componentes
import Navbar from './components/layout/Navbar';
import MusicPlayer from './components/layout/MusicPlayer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8e44ad',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <MusicPlayer 
            isPlaying={isMusicPlaying} 
            toggleMusic={() => setIsMusicPlaying(!isMusicPlaying)} 
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
