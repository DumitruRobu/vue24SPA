import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/posts',
            name: 'Post',
            component: () => import('../js/components/PostComponent.vue')
        },
        {
            path: '/tags',
            name: 'Tag',
            component: () => import('../js/components/TagComponent.vue')
        },
        // {
        //     path: '/example',
        //     name: 'Example',
        //     component: () => import('../js/components/Example.vue')
        // }
    ]
})

export default router
