import React from 'react';

import { Button, Text, TextInput } from '@react-native-material/core';

import { Grid } from './src/components';

import { useWindowDimensions } from 'react-native';
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarProps,
  Route
} from 'react-native-tab-view';

const renderTabBar = (props: TabBarProps<Route>) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#5a5a5a' }}
  />
);

const FirstRoute = () => (
  <Grid
    sx={{
      padding: 10
    }}
  >
    <Grid container>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">One Piece</Text>
      </Grid>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">É real</Text>
      </Grid>
    </Grid>

    <Grid container spacing={5}>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <TextInput
          label="Email"
          style={{
            width: '100%'
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <TextInput
          label="Password"
          style={{
            width: '100%'
          }}
        />
      </Grid>
    </Grid>

    <Grid container>
      <Button
        title="Press me"
        variant="contained"
        color="primary"
        style={{
          width: '100%'
        }}
        onPress={() => console.log('Pressed')}
      />
    </Grid>
  </Grid>
);

const SecondRoute = () => (
  <Grid
    item
    sx={{
      flex: 1
    }}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Array<Route>>([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  return (
    <TabView
      style={{
        width: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: '#fff'
      }}
      pagerStyle={{
        backgroundColor: '#5a5a5a'
      }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const App = () => (
  <Grid
    sx={{
      backgroundColor: '#959595',
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
        paddingBottom: 10
      }}
    >
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">One Piece</Text>
      </Grid>
      <Grid
        item
        sx={{
          alignItems: 'center'
        }}
      >
        <Text variant="h6">É real</Text>
      </Grid>
    </Grid>

    <Grid
      container
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <TabViewExample />
    </Grid>
  </Grid>
);

export default App;
