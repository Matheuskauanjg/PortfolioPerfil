import { ComponentProps } from 'react';
import { 
  Button, 
  Grid, 
  Box, 
  Typography, 
  IconButton,
  SxProps,
  Theme
} from '@mui/material';
import { LinkProps } from 'react-router-dom';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    component: any;
    to: string;
    target: string;
    rel: string;
    href: string;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    href: string;
    target: string;
    rel: string;
  }
}

declare module '@mui/material/Grid' {
  interface GridProps {
    item?: boolean;
  }
}

declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides {
    component?: any;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    component?: any;
  }
} 