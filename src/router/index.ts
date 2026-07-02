import { createRouter, createWebHashHistory } from 'vue-router'
import { homeRoutes } from '@/features/home'
import { blogRoutes } from '@/features/blogs'
import { aboutRoutes } from '@/features/about'
import { releaseRoutes } from '@/features/releases'
import UnauthorizedView from '@/core/components/UnauthorizedView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoutes,
    ...blogRoutes,
    ...aboutRoutes,
    ...releaseRoutes,
    // Detect sa system if unauthorized ang user if naga require ug auth ang isa ka page
    {
      path: '/unauthorized',
      component: UnauthorizedView,
    },
  ],
})

export default router
