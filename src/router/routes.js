import Loadable from 'react-loadable';

const BasicLayout = Loadable({
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
  component: BasicLayout,
}, {
  path: '/login',
  component: AsyncLogin,
}];

export default routes;
