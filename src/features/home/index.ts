import type { RouteRecordRaw } from 'vue-router'
import HomeView from './view/HomeView.vue'
import OverviewView from './view/OverviewView.vue'

// Routes for the home feature

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: '/overview',
    name: 'Overview',
    component: OverviewView,
    meta: { requiresAuth: false },
  },
]
