// Este arquivo adiciona suporte às propriedades extras que usamos nos componentes do Material UI
import { ElementType, ReactNode } from 'react';
import { SystemProps } from '@mui/system';

// Permitir componentes como Link do react-router-dom em Buttons
declare module '@mui/material/Button' {
  interface ButtonProps {
    component?: ElementType;
    to?: string;
    href?: string;
    target?: string;
    rel?: string;
    children?: ReactNode;
    variant?: string;
    color?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  }
}

// Permitir href e outros no IconButton
declare module '@mui/material/IconButton' {
  interface IconButtonProps {
    href?: string;
    target?: string;
    rel?: string;
    children?: ReactNode;
    size?: string;
    color?: string;
    'aria-label'?: string;
    className?: string;
    onClick?: () => void;
  }
}

// Permitir item e container no Grid
declare module '@mui/material/Grid' {
  interface GridProps {
    item?: boolean;
    container?: boolean;
    children?: ReactNode;
    xs?: number | boolean;
    sm?: number | boolean;
    md?: number | boolean;
    lg?: number | boolean;
    xl?: number | boolean;
    spacing?: number;
    justifyContent?: any;
    alignItems?: any;
    className?: string;
    [key: string]: any; // Para permitir outras props
  }
}

// Permitir component no Box
declare module '@mui/material/Box' {
  interface BoxProps {
    component?: any;
    children?: ReactNode;
    sx?: any;
    className?: string;
    flexGrow?: any;
    display?: any;
    flexDirection?: any;
    alignItems?: any;
    justifyContent?: any;
    marginRight?: any;
    m?: any;
    mb?: any;
    mt?: any;
    [key: string]: any; // Para permitir outras props
  }
}

// Permitir component no Typography
declare module '@mui/material/Typography' {
  interface TypographyProps {
    component?: any;
    children?: ReactNode;
    variant?: string;
    sx?: any;
    paragraph?: boolean;
    gutterBottom?: boolean;
    className?: string;
    color?: string;
    textAlign?: any;
    fontWeight?: any;
    fontStyle?: any;
    WebkitBackgroundClip?: string;
    WebkitTextFillColor?: string;
    [key: string]: any; // Para permitir outras props
  }
} 