import { Text } from '@react-native-material/core';

import { Grid } from '@src/components';

export const Toolsbar = () => {
  return (
    <Grid
      container
      sx={{
        paddingBottom: 10
      }}
    >
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">Tasks</Text>
      </Grid>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">numero teaskj</Text>
      </Grid>
    </Grid>
  );
};
