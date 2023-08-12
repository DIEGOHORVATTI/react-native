import { useState } from 'react';

import { useWindowDimensions } from 'react-native';

import { TabView, Route, SceneRendererProps } from 'react-native-tab-view';

import { RenderTabBar } from './components';

type Props<T> = {
  routes: Array<T>;
  renderScene: ({
    route,
    jumpTo,
    position
  }: SceneRendererProps & {
    route: T;
  }) => JSX.Element;
};

export const TabViewNavigation = ({ routes, renderScene }: Props<Route>) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

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
      renderTabBar={RenderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
