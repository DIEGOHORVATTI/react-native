import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type GridProps = Omit<ViewProps, 'style'> &
  StyleProp<ViewStyle> & {
    container?: boolean;
    item?: boolean;
    spacing?: number;
    sx?: ViewProps['style'];
  };
