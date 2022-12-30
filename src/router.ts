import { createRouter, createWebHashHistory } from 'vue-router'

import { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
