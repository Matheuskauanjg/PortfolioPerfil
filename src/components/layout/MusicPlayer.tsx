import React, { useEffect, useRef } from 'react';
import { IconButton, styled } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

const MusicToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: 24,
  right: 24,
  backgroundColor: 'rgba(142, 68, 173, 0.2)',
  color: '#fff',
  zIndex: 1000,
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(142, 68, 173, 0.4)',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.6)',
  },
}));

interface MusicPlayerProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, toggleMusic }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializando o objeto de áudio
  useEffect(() => {
    if (!audioRef.current) {
      // Usando um URL de música lofi do mixkit que é mais confiável
      audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  // Controle de play/pause
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio playback blocked by browser:', error);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Limpeza quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <MusicToggleButton
      onClick={toggleMusic}
      aria-label="toggle music"
    >
      {isPlaying ? <MusicNoteIcon /> : <MusicOffIcon />}
    </MusicToggleButton>
  );
};

export default MusicPlayer; 