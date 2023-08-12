import { ViewProps } from 'react-native';
import { GridContainer } from './GridContainer';

import { GridProps } from './types';

export const Grid = (
  props: GridProps & {
    sx?: ViewProps['style'];
  }
) => {
  /* @ts-ignore */
  return <GridContainer {...props} />;
};
