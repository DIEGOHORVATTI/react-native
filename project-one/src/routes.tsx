import { Route, SceneMap } from 'react-native-tab-view';

import { Grid } from '@src/components';
import { Home } from '@src/pages';

const ListRender = () => (
  <Grid
    item
    sx={{
      flex: 1
    }}
  />
);

const renderRoutes = {
  home: {
    key: 'home',
    title: 'Home',
    render: Home
  },
  list: {
    key: 'list',
    title: 'Listagem',
    render: ListRender
  }
};

export const routes: Array<Route> = Object.values(renderRoutes);

export const renderScene = SceneMap(
  Object.fromEntries(
    Object.entries(renderRoutes).map(([key, { render }]) => [key, render])
  )
);
