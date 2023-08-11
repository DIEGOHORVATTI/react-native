import { Home, Login } from '@src/pages';

export const renderRoutes = {
  home: {
    key: 'home',
    title: 'Home',
    render: Home
  },
  login: {
    key: 'login',
    title: 'Login',
    render: Login
  }
};
