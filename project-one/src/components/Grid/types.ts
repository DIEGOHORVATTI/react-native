import { VStackProps } from '@react-native-material/core';

export type GridProps = Omit<VStackProps, 'style'> & {
  container?: boolean;
  item?: boolean;
  spacing?: number;
  sx?: VStackProps['style'];
};
