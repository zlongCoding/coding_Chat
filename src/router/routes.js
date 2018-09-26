import Loadable from 'react-loadable';

const BasicLayout = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});


const AsyncLogin = Loadable({
  loader: () => import('views/login'),
  loading: () => null,
});
const article = Loadable({
  loader: () => import('views/slidBar/article'),
  loading: () => null,
});
const chatList = Loadable({
  loader: () => import('views/slidBar/chatList'),
  loading: () => null,
});
const friendList = Loadable({
  loader: () => import('views/slidBar/friendList'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: BasicLayout,
}, {
  path: '/login',
  component: AsyncLogin,
}, {
  path: '/article',
  component: article,
}, {
  path: '/chatList',
  component: chatList,
}, {
  path: '/friendList',
  component: friendList,
}];

export default routes;
