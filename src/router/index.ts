import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/Settings.vue')
  },
  {
    path: '/onboarding',
    name: 'CompanyOnboarding',
    component: () => import('@/pages/CompanyOnboarding.vue')
  },
  {
    path: '/employee-onboarding',
    name: 'EmployeeOnboarding',
    component: () => import('@/pages/EmployeeOnboarding.vue')
  },
  {
    path: '/workflow/:id',
    name: 'WorkflowDetails',
    component: () => import('@/pages/WorkflowDetails.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;