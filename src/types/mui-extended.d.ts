import '@mui/material/styles';
import '@mui/material/Button';
import '@mui/material/IconButton';
import '@mui/material/Grid';
import '@mui/material/Box';
import '@mui/material/Typography';
import { ReactNode } from 'react';
import { SystemProps } from '@mui/system';

declare module '@mui/material/styles' {
  interface Theme {
    // estender tema se necessário
  }
  interface ThemeOptions {
    // estender opções de tema se necessário
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    // estender variantes de botão se necessário
  }
}

// Estender as definições do Material UI para suportar props adicionais
declare module '@mui/material' {
  interface ButtonProps {
    component?: any;
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
    justifyContent?: SystemProps['justifyContent'];
    alignItems?: SystemProps['alignItems'];
    className?: string;
  }

  interface BoxProps {
    component?: any;
    children?: ReactNode;
    sx?: any;
    className?: string;
    flexGrow?: any; // Usando any para evitar conflitos de tipo
    display?: any;
    flexDirection?: any;
    alignItems?: any;
    justifyContent?: any;
    marginRight?: any;
    m?: any;
    mb?: any;
    mt?: any;
    [key: string]: any; // Permite qualquer propriedade
  }

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
  }
} 