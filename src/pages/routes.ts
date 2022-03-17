import { lazy } from 'react';

const Login: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import('./Auth/Login'));
const Profile: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import('./User/Profile'));
const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import('./Home/Home'));
const Register: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import('./Auth/Register'));

const routes = [
  {
    path: '/',
    exact: true,
    public: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    public: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    public: true,
    component: Register,
  },
  {
    path: '/Profile',
    exact: true,
    public: true,
    component: Profile,
  },
];

export default routes;
