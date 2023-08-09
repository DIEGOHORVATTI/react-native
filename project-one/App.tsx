import React from 'react';

import { Button, Text } from '@react-native-material/core';

import { Grid } from './src/components';

const App = () => (
  <Grid
    sx={{
      backgroundColor: '#00ed3f',
      width: '100%',
      height: '100%'
    }}
  >
    <Grid
      container
      sx={{
        height: 60
      }}
    />

    <Grid
      container
      sx={{
        width: '100%',
        justifyContent: 'space-between'
      }}
    >
      <Grid item>
        <Text variant="h6">h1. Heading</Text>
        gGG
      </Grid>
      <Grid item>
        <Text variant="h6">h1. Heading</Text>
      </Grid>
      G
    </Grid>

    <Grid
      container
      sx={{
        backgroundColor: '#ae00ed',
        padding: 10,
        width: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height: '100%'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Text variant="overline">h6. Heading</Text>
        </Grid>
        <Grid item>
          <Text variant="h6">h6. Heading</Text>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Text variant="h6">h6. Heading</Text>
            </Grid>

            <Grid item>
              <Text variant="h6">h6. Heading</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Text variant="h6">h6. Heading</Text>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Button title="teste" variant="contained" color="surface">
          Primary
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

export default App;
