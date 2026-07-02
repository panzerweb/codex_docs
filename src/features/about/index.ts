import type { RouteRecordRaw } from 'vue-router'
import AboutView from './view/AboutView.vue'

// Routes for About features

export const aboutRoutes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: false },
  },
]
