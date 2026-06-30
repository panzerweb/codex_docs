import AboutView from '@/features/about/view/AboutView.vue'
import BlogsView from '@/features/blogs/view/BlogsView.vue'
import HomeView from '@/features/home/view/HomeView.vue'
import ReleasesView from '@/features/releases/view/ReleasesView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/blogs',
      component: BlogsView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/releases',
      component: ReleasesView,
    },
  ],
})

export default router
