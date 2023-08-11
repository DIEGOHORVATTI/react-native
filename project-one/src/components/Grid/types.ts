import { VStackProps } from '@react-native-material/core';
import { StyleProp, ViewStyle } from 'react-native';

export type GridProps = Omit<VStackProps, 'style'> &
  StyleProp<ViewStyle> & {
    container?: boolean;
    item?: boolean;
    spacing?: number;
    sx?: VStackProps['style'];
  };
