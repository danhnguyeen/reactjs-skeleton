import React from 'react';
import Loadable from 'react-loadable'

// import Layout from './components/Layout';

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./containers/Home/Home'),
  loading: Loading,
});

const Companies = Loadable({
  loader: () => import('./containers/Companies/companies'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./containers/Users/users'),
  loading: Loading,
});


const routes = [
  // { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/companies', exact: true, name: 'Companies', component: Companies }
];

export default routes;
