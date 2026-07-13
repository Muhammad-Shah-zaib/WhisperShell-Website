import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/core/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/features/landing/views/HomeView.vue')
        },
        {
          path: 'downloads',
          name: 'downloads',
          component: () => import('@/features/downloads/views/DownloadsView.vue')
        },
        {
          path: 'docs',
          component: () => import('@/features/docs/views/DocsLayout.vue'),
          children: [
            {
              path: '',
              redirect: '/docs/getting-started'
            },
            {
              path: 'getting-started',
              name: 'docs-getting-started',
              component: () => import('@/features/docs/views/DocsGettingStarted.vue')
            },
            {
              path: 'copr-support',
              name: 'docs-copr-support',
              component: () => import('@/features/docs/views/DocsCoprSupport.vue')
            },
            {
              path: 'model-config',
              name: 'docs-model-config',
              component: () => import('@/features/docs/views/DocsModelConfig.vue')
            },
            {
              path: 'custom-models',
              name: 'docs-custom-models',
              component: () => import('@/features/docs/views/DocsCustomModels.vue')
            },
            {
              path: 'hotkeys',
              name: 'docs-hotkeys',
              component: () => import('@/features/docs/views/DocsHotkeys.vue')
            },
            {
              path: 'troubleshooting',
              name: 'docs-troubleshooting',
              component: () => import('@/features/docs/views/DocsTroubleshooting.vue')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
