import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});

const AsyncUser = Loadable({
  loader: () => import('views/user'),
  loading: () => null,
});

const AsyncLogin = Loadable({
  loader: () => import('views/login'),
  loading: () => null,
});

const AsyncChat = Loadable({
  loader: () =>
    import('views/chat'),
  loading: () => null,
});
const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}, {
  path: '/user',
  component: AsyncUser,
}, {
  path: '/login',
  component: AsyncLogin,
}, {
  path: '/wechat',
  component: AsyncChat,
}];

export default routes;
