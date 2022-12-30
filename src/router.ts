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
    path: '/chapter1/',
    children: [
      {
        path: '01-container',
        component: () => import('@/views/chapter1-basic/01-container.vue'),
      },
      {
        path: '02-transparentBackground',
        component: () =>
          import('@/views/chapter1-basic/02-transparentBackground.vue'),
      },
      {
        path: '03-tinting',
        component: () => import('@/views/chapter1-basic/03-tinting.vue'),
      },
      {
        path: '04-cacheAsBitmap',
        component: () => import('@/views/chapter1-basic/04-cacheAsBitmap.vue'),
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
