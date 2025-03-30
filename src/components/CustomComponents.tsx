import React, { ReactNode } from 'react';
import { 
  Button as MuiButton, 
  ButtonProps as MuiButtonProps,
  Box as MuiBox,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  SxProps,
  Theme
} from '@mui/material';
import { SystemProps } from '@mui/system';

// Estendendo o tipo do Button para incluir component, to, etc.
interface ButtonProps extends Omit<MuiButtonProps, 'children'> {
  component?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

// Criando uma interface CustomBoxProps sem estender MuiBoxProps diretamente
interface CustomBoxProps {
  component?: React.ElementType;
  children?: ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
  display?: SystemProps['display'];
  flexDirection?: SystemProps['flexDirection'];
  alignItems?: SystemProps['alignItems'];
  justifyContent?: SystemProps['justifyContent'];
  flexWrap?: SystemProps['flexWrap'];
  marginRight?: SystemProps['marginRight'];
  m?: SystemProps['m'];
  mb?: SystemProps['mb'];
  mt?: SystemProps['mt'];
  flexGrow?: SystemProps['flexGrow'];
  // Adicionando outras propriedades comuns que possam ser usadas
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  margin?: string | number;
  padding?: string | number;
  p?: SystemProps['p'];
  [key: string]: any; // Permitindo propriedades adicionais
}

export const Box: React.FC<CustomBoxProps> = (props) => {
  return <MuiBox {...props} />;
};

// Estendendo o tipo do Typography para incluir component
interface TypographyProps extends Omit<MuiTypographyProps, 'children'> {
  component?: React.ElementType;
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  sx?: SxProps<Theme>;
  gutterBottom?: boolean;
  paragraph?: boolean;
  className?: string;
  color?: string;
  textAlign?: SystemProps['textAlign'];
  fontWeight?: SystemProps['fontWeight'];
  WebkitBackgroundClip?: string;
  WebkitTextFillColor?: string;
  fontStyle?: SystemProps['fontStyle'];
}

export const Typography: React.FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};

// Estendendo o tipo do IconButton para incluir href, target, etc.
interface IconButtonProps extends Omit<MuiIconButtonProps, 'children'> {
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  sx?: SxProps<Theme>;
  className?: string;
  'aria-label'?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
}; 