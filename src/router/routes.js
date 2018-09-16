import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});


const AsyncLogin = Loadable({
  loader: () => import('views/login'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}, {
  path: '/login',
  component: AsyncLogin,
}];

export default routes;
