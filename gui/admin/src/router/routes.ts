import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'src/layouts/MainLayout.vue';
import AuthLayout from 'src/layouts/AuthLayout.vue';
import { ROUTE_NAME } from './names';
import { authGuard } from './guards';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    beforeEnter: authGuard,
    children: [
      {
        path: '',
        name: ROUTE_NAME.HOME,
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: ROUTE_NAME.AUTH,
        component: () => import('pages/LoginPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
