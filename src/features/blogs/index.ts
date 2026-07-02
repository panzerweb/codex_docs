import type { RouteRecordRaw } from 'vue-router'
import BlogsView from './view/BlogsView.vue'

// Routes for Blogs feature
export const blogRoutes: RouteRecordRaw[] = [
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsView,
    meta: { requiresAuth: false },
  },
]
