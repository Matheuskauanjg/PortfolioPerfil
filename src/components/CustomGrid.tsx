import React, { ReactNode } from 'react';
import { Grid as MuiGrid, SxProps, Theme } from '@mui/material';

// Usando uma tipagem mais flexível para contornar os problemas
interface GridProps {
  item?: boolean;
  container?: boolean;
  component?: React.ElementType;
  children?: ReactNode;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
  spacing?: number;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
  sx?: SxProps<Theme>;
  [key: string]: any; // Para permitir qualquer outra propriedade
}

// Passamos as props diretamente sem tipar como React.FC<GridProps>
export const Grid = (props: GridProps) => {
  // Não fazemos nada com os avisos por enquanto, apenas ignoramos
  // O aviso é apenas um alerta sobre futura migração, mas o componente ainda funciona
  return <MuiGrid {...props} />;
};

export default Grid; 