import { Text } from 'react-native-paper';

import { Grid } from '../../components';

export const Toolsbar = () => {
  return (
    <Grid
      container
      sx={{
        paddingBottom: 10
      }}
    >
      <Grid item alingItems="center">
        <Text variant="bodyMedium">Tasks</Text>
      </Grid>
      <Grid item alingItems="center">
        <Text variant="bodyMedium">numero teaskj</Text>
      </Grid>
    </Grid>
  );
};
