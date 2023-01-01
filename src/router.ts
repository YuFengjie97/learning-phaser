import { createRouter, createWebHashHistory } from 'vue-router'

import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/01-helloworld',
    component: () => import('@/views/01-helloworld/index.vue'),
  },
  {
    path: '/02-beginer',
    component: () => import('@/views/02-beginer/index.vue'),
  },
  {
    path: '/03-animation/',
    children: [
      {
        path: '60fpsWalk',
        component: () => import('@/views/03-animation/60fpsWalk.vue'),
      },
    ],
  },
  {
    path: '/04-action/',
    children: [
      {
        path: 'PlaceOnEllipse',
        component: () => import('@/views/04-action/PlaceOnEllipse.vue'),
      },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
