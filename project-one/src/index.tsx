import React from 'react';

import { Route, SceneMap } from 'react-native-tab-view';

import { Grid, Toolsbar, TabViewNavigation } from '@src/components';

import { renderRoutes } from './routes';

export const Main = () => {
  const routes: Array<Route> = Object.values(renderRoutes);

  const renderScene = SceneMap(
    Object.fromEntries(
      Object.entries(renderRoutes).map(([key, { render }]) => [key, render])
    )
  );

  return (
    <Grid
      sx={{
        backgroundColor: '#959595'
      }}
    >
      <Grid
        sx={{
          height: 60
        }}
      />

      <Toolsbar />

      <Grid height={'100%'}>
        <TabViewNavigation routes={routes} renderScene={renderScene} />
      </Grid>
    </Grid>
  );
};
