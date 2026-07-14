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
          component: () => import('@/features/landing/views/HomeView.vue'),
          meta: { title: 'WhisperShell - Open Source Dictation for Linux', description: 'High-performance, secure, Wayland-native voice processing built specifically for the modern Linux workstation.', keywords: 'whispershell, linux, wayland, dictation, speech to text, open source' }
        },
        {
          path: 'downloads',
          name: 'downloads',
          component: () => import('@/features/downloads/views/DownloadsView.vue'),
          meta: { title: 'Download WhisperShell', description: 'Download WhisperShell packages for RPM-based distributions.', keywords: 'download whispershell, rpm, linux dictation download' }
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
              component: () => import('@/features/docs/views/DocsGettingStarted.vue'),
              meta: { title: 'Getting Started - WhisperShell Docs', description: 'Learn how to install and set up WhisperShell.', keywords: 'whispershell setup, installation, getting started' }
            },
            {
              path: 'copr-support',
              name: 'docs-copr-support',
              component: () => import('@/features/docs/views/DocsCoprSupport.vue'),
              meta: { title: 'COPR Repository - WhisperShell Docs', description: 'Install WhisperShell seamlessly via Fedora COPR.', keywords: 'fedora copr, whispershell copr, install whispershell fedora' }
            },
            {
              path: 'model-config',
              name: 'docs-model-config',
              component: () => import('@/features/docs/views/DocsModelConfig.vue'),
              meta: { title: 'Model Configuration - WhisperShell Docs', description: 'Configure AI models for WhisperShell.', keywords: 'whisper models, configure whispershell, local ai models' }
            },
            {
              path: 'custom-models',
              name: 'docs-custom-models',
              component: () => import('@/features/docs/views/DocsCustomModels.vue'),
              meta: { title: 'Custom Models - WhisperShell Docs', description: 'Use custom Whisper AI models with WhisperShell.', keywords: 'custom whisper models, whispershell custom models' }
            },
            {
              path: 'hotkeys',
              name: 'docs-hotkeys',
              component: () => import('@/features/docs/views/DocsHotkeys.vue'),
              meta: { title: 'Hotkeys - WhisperShell Docs', description: 'Global hotkey configuration for WhisperShell.', keywords: 'whispershell hotkeys, linux global hotkeys, wayland hotkeys' }
            },
            {
              path: 'troubleshooting',
              name: 'docs-troubleshooting',
              component: () => import('@/features/docs/views/DocsTroubleshooting.vue'),
              meta: { title: 'Troubleshooting - WhisperShell Docs', description: 'Troubleshoot issues with WhisperShell on Wayland.', keywords: 'whispershell troubleshooting, fix whispershell, wayland issues' }
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

router.afterEach((to) => {
  const defaultTitle = 'WhisperShell'
  const defaultDesc = 'High-performance, secure, Wayland-native voice processing for Linux.'
  const defaultKeywords = 'whispershell, linux, wayland, dictation, speech to text, open source'
  
  document.title = to.meta.title || defaultTitle

  const updateMeta = (name, content, attribute = 'name') => {
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      document.head.appendChild(tag)
    }
    tag.content = content
  }

  updateMeta('description', to.meta.description || defaultDesc)
  updateMeta('keywords', to.meta.keywords || defaultKeywords)
  updateMeta('og:title', to.meta.title || defaultTitle, 'property')
  updateMeta('og:description', to.meta.description || defaultDesc, 'property')
  
  const url = `https://whispershell.tech${to.path}`
  updateMeta('og:url', url, 'property')

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
})

export default router
