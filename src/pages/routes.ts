import { lazy } from 'react';

const Login: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import('./Auth/Login'));

const routes = [
  {
    path: '/login',
    exact: true,
    public: true,
    component: Login,
  },
];

export default routes;
