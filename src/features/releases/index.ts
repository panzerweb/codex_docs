import type { RouteRecordRaw } from 'vue-router'
import ReleasesView from './view/ReleasesView.vue'

// Routes for releases feature

export const releaseRoutes: RouteRecordRaw[] = [
  {
    path: '/releases',
    name: 'Releases',
    component: ReleasesView,
    meta: { requiresAuth: false },
  },
]
