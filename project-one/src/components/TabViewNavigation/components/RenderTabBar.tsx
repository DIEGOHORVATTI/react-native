import { Route, TabBar, TabBarProps } from 'react-native-tab-view';

export const RenderTabBar = (props: TabBarProps<Route>) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#5a5a5a' }}
  />
);
