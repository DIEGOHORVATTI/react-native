import { VStackProps } from '@react-native-material/core';

import { GridContainer } from './GridContainer';

import { GridProps } from './types';

export const Grid = (props: GridProps & Omit<VStackProps, 'style'>) => {
  return <GridContainer {...props} />;
};
