import React from 'react';

import { Grid, Toolsbar, TabViewNavigation } from '@src/components';

import { renderScene, routes } from './routes';

export const Main = () => (
  <Grid
    sx={{
      backgroundColor: '#959595'
    }}
  >
    <Grid
      container
      sx={{
        height: 60
      }}
    />

    <Toolsbar />

    <Grid
      container
      sx={{
        height: '100%'
      }}
    >
      <TabViewNavigation routes={routes} renderScene={renderScene} />
    </Grid>
  </Grid>
);
