import { VStack, VStackProps } from '@react-native-material/core';
import styled from 'styled-components/native';

const gridStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

const itemStyles = {
  flex: 1
};

export const GridContainer = styled(VStack)<{
  container?: boolean;
  item?: boolean;
  spacing?: number;
  sx?: any;
}>(({ container, item, spacing, sx }) => ({
  ...(container && gridStyles),
  ...(item && itemStyles),
  gap: spacing ? `${spacing}px` : '0',
  ...sx
}));
