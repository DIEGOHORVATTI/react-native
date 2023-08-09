import React from 'react';

import { Text } from '@react-native-material/core';

import { Grid } from './src/components';

const App = () => (
  <Grid mt={100}>
    <Grid container spacing={5}>
      <Grid
        item
        sx={{
          backgroundColor: 'blue'
        }}
      >
        <Text variant="overline">h6. Heading</Text>
      </Grid>

      <Grid item>
        <Text variant="h6">h6. Heading</Text>
      </Grid>

      <Grid item>
        <Text variant="h6">h6. Heading</Text>
      </Grid>

      <Grid item>
        <Text variant="h6">h6. Heading</Text>
      </Grid>
    </Grid>
  </Grid>
);

export default App;
